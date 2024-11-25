from pydub import AudioSegment
from pydub.utils import make_chunks
import os
import requests
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson.objectid import ObjectId
from pathlib import Path
from sklearn.metrics.pairwise import cosine_similarity
from datetime import datetime, timezone
from openai import OpenAI
import json
import re

# Configuração da API do Hugging Face
HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/facebook/mms-1b-all"
HUGGINGFACE_HEADERS = os.environ.get

# Configuração da API AI/ML
AI_ML_BASE_URL = "https://api.aimlapi.com/v1"
AI_ML_API_KEY = os.environ.get("AI_ML_API_KEY") 

# Conexão com MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["permacult_db"]
collection = db["stories"]

current_time = datetime.now(timezone.utc).isoformat()
print(current_time)

# Carregar mensagens de moderação
with open("hazard_messages.json", "r") as f:
    hazard_messages = json.load(f)


# Carregar o arquivo JSON com os idiomas
with open("language_map.json", "r", encoding="utf-8") as file:
    language_map = json.load(file)


# Inicialização do FastAPI
app = FastAPI()





# Configuração do middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Permita somente o front-end do Next.js
    allow_credentials=True,
    allow_methods=["*"],  # Permita todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permita todos os cabeçalhos
)


# Configuração do cliente OpenAI
ai_ml_client = OpenAI(api_key=AI_ML_API_KEY, base_url=AI_ML_BASE_URL)



def serialize_story(story):
    """Converte o _id do MongoDB para string."""
    if "_id" in story:
        story["_id"] = str(story["_id"])
    return story




@app.post("/upload-audio/")
async def process_audio(name: str, age: int, location: str, file: UploadFile = File(...)):
    try:
        # Certifique-se de que o diretório temp/ existe
        temp_dir = Path("temp")
        temp_dir.mkdir(parents=True, exist_ok=True)

        # Salvar o arquivo de áudio temporariamente
        audio_path = temp_dir / file.filename
        with open(audio_path, "wb") as buffer:
            buffer.write(await file.read())

        # Pré-processar o áudio para 16 kHz e dividir em chunks
        chunk_paths = preprocess_audio(audio_path)

        # Processar cada chunk individualmente
        transcriptions = []
        for chunk_path in chunk_paths:
            chunk_result = query_huggingface_api(chunk_path)
            if "error" in chunk_result:
                return {"error": chunk_result["error"]}
            transcriptions.append(chunk_result.get("text", ""))

        # Combinar todas as transcrições
        full_transcription = " ".join(transcriptions)

        # Enviar o texto para categorização com o Llama via SambaNova
        categories, content_type, keywords, insights = categorize_text_with_llama(full_transcription)

        # Traduzir o texto para inglês
        translated_text = translate_text_with_llama(full_transcription)

        
        # Moderação consolidada (original e traduzido)
        moderation_results = consolidate_moderation_checks(full_transcription, translated_text)
        if not moderation_results["safe"]:
            # Exibe no terminal e retorna ao cliente a mensagem detalhada
            print("Moderation failed:", moderation_results["reason"])
            return {
                "error": moderation_results["reason"]
            }

        # Detectar a linguagem do texto usando Llama
        detected_lang = detect_text_language_with_llama(full_transcription)
        if detected_lang == "ERROR":
            return {"error": "Failed to detect language. Please try again later."}
        
        # Encontrar histórias relacionadas
        related_versions = find_related_stories(translated_text)

        # Gerar embedding do texto em inglês
        embedding = get_text_embedding(translated_text)

        # Salvar os dados no MongoDB
        story_data = {
            "name": name,
            "age": age,
            "location": location,
            "language": detected_lang,
            "content_type": content_type,
            "text": full_transcription,
            "text_en": translated_text,
            "categories": categories,
            "keywords": keywords,
            "insights": insights,
            "related_versions": related_versions,
            "embedding": embedding,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        inserted_id = collection.insert_one(story_data).inserted_id
        story_data["_id"] = str(inserted_id)

        return {"message": "Story processed and saved successfully", "data": story_data}

    except Exception as e:
        return {"error": str(e)}
    
@app.post("/upload-text/")
async def process_text(name: str = Form(...), age: int = Form(...), location: str = Form(...), text: str = Form(...)):
    try:
        # Detectar a linguagem do texto usando Llama
        detected_lang = detect_text_language_with_llama(text)
        if detected_lang == "ERROR":
            return {"error": "Failed to detect language. Please try again later."}

        # Traduzir o texto para inglês
        translated_text = translate_text_with_llama(text, detected_language=detected_lang)

        # Categorizar o texto
        categories, content_type, keywords, insights = categorize_text_with_llama(text)

        # Moderação consolidada (original e traduzido)
        moderation_results = consolidate_moderation_checks(text, translated_text)
        if not moderation_results["safe"]:
            # Exibe no terminal e retorna ao cliente a mensagem detalhada
            print("Moderation failed:", moderation_results["reason"])
            return {
                "error": moderation_results["reason"]
            }
        
        # Encontrar histórias relacionadas
        related_versions = find_related_stories(translated_text)

        # Gerar embedding do texto em inglês
        embedding = get_text_embedding(translated_text)

        # Salvar os dados no MongoDB
        story_data = {
            "name": name,
            "age": age,
            "location": location,
            "language": detected_lang,
            "content_type": content_type,
            "text": text,
            "text_en": translated_text,
            "categories": categories,
            "keywords": keywords,
            "insights": insights,
            "related_versions": related_versions,
            "embedding": embedding,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        inserted_id = collection.insert_one(story_data).inserted_id
        story_data["_id"] = str(inserted_id)

        return {"message": "Story processed and saved successfully", "data": story_data}

    except Exception as e:
        return {"error": str(e)}

def consolidate_moderation_checks(original_text, translated_text):
    """
    Consolida as verificações de moderação para evitar chamadas repetidas.
    """
    try:
        reasons = []
        unsafe_codes = []

        # Moderação do texto original
        print("Moderating original text...")
        original_status = moderate_text_with_llama_guard(original_text)
        print(f"Original moderation result: {original_status}")  # Log do resultado
        if "unsafe" in original_status.lower():
            code = extract_code_from_moderation_result(original_status)
            if code:
                unsafe_codes.append(code)
                reasons.append(hazard_messages["phrases"].get(code, "Identificamos um problema com seu conteúdo."))

        # Moderação do texto traduzido
        print("Moderating translated text...")
        translated_status = moderate_text_with_llama_guard(translated_text)
        print(f"Translated moderation result: {translated_status}")  # Log do resultado
        if "unsafe" in translated_status.lower():
            code = extract_code_from_moderation_result(translated_status)
            if code and code not in unsafe_codes:  # Evitar mensagens duplicadas
                unsafe_codes.append(code)
                reasons.append(hazard_messages["phrases"].get(code, "Identificamos um problema com seu conteúdo."))

        # Se qualquer texto for inseguro, retornar as razões acumuladas
        if reasons:
            print("Consolidated moderation failed.")  # Log no terminal
            full_message = hazard_messages["general"] + "\n\n" + "\n\n".join(reasons)
            return {"safe": False, "reason": full_message}

        # Ambos os textos são seguros
        print("Moderation passed for both original and translated texts.")  # Log no terminal
        return {"safe": True, "reason": None}

    except Exception as e:
        print(f"Error during consolidated moderation check: {e}")
        return {"safe": False, "reason": "Error during moderation check."}

def detect_text_language_with_llama(text):
    """Detecta e normaliza a linguagem do texto usando a API AI/ML."""
    try:
        response = ai_ml_client.chat.completions.create(
            model="meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
            messages=[
                {"role": "system", "content": (
                    "You are an expert assistant in language and ethnicity detection. "
                    "Your task is to analyze the given text and accurately return the detected language "
                    "in lowercase English. If the text contains mixed languages, return the predominant language. "
                    "Respond with only the normalized name of the language (e.g., 'portuguese', 'english', "
                    "'spanish', 'french', etc.). Do not include any additional text."
                )},
                {"role": "user", "content": f"Detect the language of the following text:\n{text}"}
            ],
            temperature=0.1,
            top_p=0.1,
        )

        # Extraindo a linguagem detectada
        detected_lang = response.choices[0].message.content.strip()
        print("Detected Language from API:", detected_lang)

        # Corrigir e normalizar o idioma detectado usando o JSON
        normalized_lang = language_map.get(detected_lang.lower())
        
        # Se o idioma não for encontrado no mapeamento, registrar o problema
        if not normalized_lang:
            print(f"Warning: Detected language '{detected_lang}' not found in the mapping.")
            normalized_lang = detected_lang.lower()  # Fallback para o idioma detectado

        print("Normalized Language:", normalized_lang)
        return normalized_lang

    except Exception as e:
        print(f"Error detecting language: {e}")
        return "unknown"
    

def preprocess_audio(audio_path):
    """Pré-processa o áudio para 16 kHz e divide em chunks."""
    try:
        audio = AudioSegment.from_file(audio_path)
        audio = audio.set_frame_rate(16000).set_channels(1)
        chunks = make_chunks(audio, 30 * 1000)  # Dividir em partes de 30 segundos
        chunk_paths = []
        for i, chunk in enumerate(chunks):
            chunk_path = f"{audio_path.stem}_chunk_{i}.wav"
            chunk.export(chunk_path, format="wav")
            chunk_paths.append(chunk_path)
        return chunk_paths
    except Exception as e:
        print(f"Error preprocessing audio: {e}")
        raise

def query_huggingface_api(filename):
    """Envia o arquivo de áudio para a API Hugging Face."""
    try:
        with open(filename, "rb") as f:
            data = f.read()
        response = requests.post(
            HUGGINGFACE_API_URL,
            headers=HUGGINGFACE_HEADERS,
            data=data,
            timeout=180  # Tempo limite aumentado para 180 segundos
        )
        print("Hugging Face API Response:", response.status_code, response.text)
        return response.json()
    except requests.exceptions.Timeout:
        print("Request timed out.")
        return {"error": "Request timed out."}
    except Exception as e:
        print(f"Error querying Hugging Face API: {e}")
        return {"error": "Failed to query Hugging Face API"}


def moderate_text_with_llama_guard(text):
    """Modera o texto traduzido usando Llama Guard via AI/ML."""
    try:
        # Chamando a API AI/ML com o modelo Meta-Llama-Guard
        response = ai_ml_client.chat.completions.create(
            messages=[
                {"role": "user", "content": text}
            ],
            model="meta-llama/Meta-Llama-Guard-3-8B"
        )

        # Extraindo o resultado da moderação
        moderation_result = response.choices[0].message.content.strip()
        print("Llama Guard Response via AI/ML:", moderation_result)  # Log da resposta no terminal
        return moderation_result

    except Exception as e:
        print(f"Error with Llama Guard moderation using AI/ML: {e}")
        return "error"


def extract_code_from_moderation_result(result):
    """
    Extrai o código (ex.: S5) do resultado da moderação, mesmo que esteja em outra linha.
    """
    try:
        lines = result.split("\n")  # Divide o resultado em linhas
        for line in lines:
            if line.strip().startswith("S"):  # Verifica se a linha contém o código
                return line.strip()  # Retorna o código, ex.: "S5"
        return None  # Retorna None se nenhum código for encontrado
    except Exception as e:
        print(f"Error extracting code from moderation result: {e}")
        return None



def categorize_text_with_llama(text):
    """Detecta a linguagem do texto usando a API AI/ML."""
    try:
        response = ai_ml_client.chat.completions.create(
            model="meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
            messages=[
                {"role": "system", "content": "You are an advanced cultural categorization assistant."},
                {"role": "user", "content": f"Analyze the following text:\n\n{text}\n\nReturn the following information in JSON format:\n1. Categories (themes and format).\n2. Content Type.\n3. Keywords.\n4. Insights."}
            ],
            temperature=0.1,
            top_p=0.1
        )

        # Extrair o conteúdo retornado
        result = response.choices[0].message.content.strip()
        print("Categorization Raw Result:", result)  # Log para depuração

        # Isolar o JSON bruto usando regex
        json_match = re.search(r"\{.*\}", result, re.DOTALL)
        if not json_match:
            raise ValueError("No JSON found in the response.")

        # Parse do JSON
        parsed_result = json.loads(json_match.group(0))

        categories = parsed_result.get("categories", {"themes": [], "format": []})
        content_type = parsed_result.get("content_type", "unknown")
        keywords = parsed_result.get("keywords", [])
        insights = parsed_result.get("insights", [])

        return categories, content_type, keywords, insights

    except json.JSONDecodeError as json_err:
        print(f"JSON parsing error: {json_err}")
        print("Raw result:", result)
        return {"themes": [], "format": []}, "unknown", [], []
    except Exception as e:
        print("Unexpected error in categorization:", e)
        return {"themes": [], "format": []}, "unknown", [], []




def translate_text_with_llama(text, detected_language="unknown"):
    """Traduz o texto original para inglês usando a API AI/ML."""
    try:
        # Mensagem personalizada para o modelo
        if detected_language == "unknown":
            language_info = "The language of the text is unknown. Please try to infer the language and translate it to English."
        else:
            language_info = f"The text is in {detected_language}. Please translate it into English."

        # Solicitação de tradução ao modelo AI/ML
        response = ai_ml_client.chat.completions.create(
            model='meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo',
            messages=[
                {"role": "system", "content": "You are a multilingual translation assistant."},
                {"role": "user", "content": f"{language_info}\n\nText:\n{text}"}
            ],
            temperature=0.3,
            top_p=0.9,
        )

        # Extraindo a tradução
        translation = response.choices[0].message.content.strip()
        print("Translation Response:", translation)
        return translation

    except Exception as e:
        print("Error during translation:", e)
        return "Translation failed. Please try again later."




def find_related_stories(new_story_text, max_related=3):
    """
    Encontra histórias relacionadas com base na similaridade de texto usando embeddings da AI/ML API.
    
    Args:
        new_story_text (str): Texto traduzido da nova história.
        max_related (int): Número máximo de histórias relacionadas.
    
    Returns:
        List[str]: IDs das histórias mais relacionadas.
    """
    try:
        # Carregar todas as histórias existentes do banco
        all_stories = list(collection.find({}, {"_id": 1, "text_en": 1}))
        
        if not all_stories:
            return []  # Nenhuma história existente, sem relacionamentos

        # Gerar embedding para a nova história usando a API AI/ML
        response = ai_ml_client.embeddings.create(
            input=new_story_text,
            model="text-embedding-3-large"  # Escolha o modelo adequado
        )
        new_story_embedding = response.data[0].embedding  # Correção aqui

        # Gerar embeddings para as histórias existentes
        existing_embeddings = []
        story_ids = []
        for story in all_stories:
            story_ids.append(story["_id"])
            response = ai_ml_client.embeddings.create(
                input=story["text_en"],
                model="text-embedding-3-large"
            )
            existing_embeddings.append(response.data[0].embedding)  # Correção aqui

        # Calcular similaridade usando cosseno
        similarities = cosine_similarity(
            [new_story_embedding],
            existing_embeddings
        )[0]

        # Ordenar histórias pela similaridade
        related_indices = sorted(
            range(len(similarities)), 
            key=lambda i: similarities[i], 
            reverse=True
        )[:max_related]

        # Retornar IDs das histórias mais relacionadas
        return [str(story_ids[i]) for i in related_indices]

    except Exception as e:
        print(f"Erro ao encontrar histórias relacionadas: {e}")
        return []




def get_text_embedding(text):
    """
    Obtém o embedding de um texto usando a API AI/ML.
    """
    try:
        response = requests.post(
            f"{AI_ML_BASE_URL}/embeddings",
            headers={
                "Authorization": f"Bearer {AI_ML_API_KEY}",
                "Content-Type": "application/json",
            },
            data=json.dumps({"model": "text-embedding-3-large", "input": text}),
        )
        response.raise_for_status()
        embedding = response.json()["data"][0]["embedding"]
        return embedding
    except requests.exceptions.RequestException as e:
        raise ValueError(f"Erro ao conectar à API de embeddings: {str(e)}")












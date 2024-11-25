from fastapi import FastAPI, Query
from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime, timezone
from langchain.chains import LLMChain
from langchain_core.prompts import PromptTemplate
from langchain_community.llms import OpenAI
from pydantic import BaseModel
from gtts import gTTS
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from services.analytics import router as analytics_router
from services.search import router as search_router
from services.stories_location import router as stories_location_router
import os
import requests
import json





# Configuração do MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["permacult_db"]
collection = db["stories"]

# Configuração do token da AIML API
AIML_API_KEY = os.environ.get # Substitua pela sua chave real
AIML_TTS_URL = "https://api.aimlapi.com/tts"



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


# Registrar o roteador do módulo de análises
app.include_router(analytics_router)
app.include_router(search_router)
app.include_router(stories_location_router)



# Função para serializar histórias
def serialize_story(story):
    if "_id" in story:
        story["_id"] = str(story["_id"])
    return story

class ChatRequest(BaseModel):
    user_message: str


class SearchRequest(BaseModel):
    query: str


@app.get("/")
async def root():
    return {"message": "Centralized API Gateway"}    

# Endpoint Contagem de histórias (Página Welcome)
@app.get("/stories/count/")
async def get_story_count():
    """Retorna o número total de histórias armazenadas."""
    try:
        story_count = collection.count_documents({})
        return {"total_stories": story_count}
    except Exception as e:
        return {"error": str(e)}

# Endpoint Histórias por Localização (Globo Interativo)
@app.get("/stories/by-location/")
async def get_stories_by_location():
    """Agrupa histórias por localização."""
    try:
        pipeline = [
            {"$group": {"_id": "$location", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}}
        ]
        result = list(collection.aggregate(pipeline))
        return {"locations": result}
    except Exception as e:
        return {"error": str(e)}

# Endpoint Tags Dinâmicas (Página Explorar)
@app.get("/categories/")
async def get_categories():
    """Agrupa categorias dinamicamente."""
    try:
        pipeline = [
            {"$unwind": "$categories.themes"},
            {"$group": {"_id": "$categories.themes", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}}
        ]
        result = list(collection.aggregate(pipeline))
        return {"categories": result}
    except Exception as e:
        return {"error": str(e)}



@app.get("/categories/{category}/stories/")
async def get_stories_by_category(category: str, page: int = 1, limit: int = 9):
    """
    Lista histórias de uma categoria específica com suporte à paginação.
    """
    try:
        # Calcula o número de documentos para pular com base na página atual
        skip = (page - 1) * limit

        # Total de histórias na categoria
        total_stories = collection.count_documents({"categories.themes": category})

        # Consulta com skip e limit para aplicar paginação
        stories = list(
            collection.find({"categories.themes": category}, {"_id": 1, "text_en": 1})
            .skip(skip)
            .limit(limit)
        )

        # Total de páginas
        total_pages = (total_stories + limit - 1) // limit

        # Retorna as histórias e o total de páginas
        return {
            "stories": [{"_id": str(story["_id"]), "text_en": story["text_en"]} for story in stories],
            "totalPages": total_pages,
        }
    except Exception as e:
        return {"error": str(e)}






# Endpoint Detalhes de uma História
@app.get("/story/{story_id}/")
async def get_story(story_id: str):
    """Retorna os detalhes de uma história."""
    try:
        story = collection.find_one({"_id": ObjectId(story_id)})
        if not story:
            return {"error": "Story not found"}
        return {"story": serialize_story(story)}
    except Exception as e:
        return {"error": str(e)}

# Endpoint 8: Ouvir História
@app.get("/story/{story_id}/audio/")
async def get_story_audio(story_id: str, language: str = "en"):
    """Gera áudio para uma história."""
    try:
        # Recuperar a história
        story = collection.find_one({"_id": ObjectId(story_id)}, {"text_en": 1, "text": 1, "language": 1})
        if not story:
            return {"error": "Story not found"}

        # Selecionar o texto com base no idioma solicitado
        if language == "original":
            text = story["text"]
            lang_code = story["language"].lower()[:2]  # Supõe que 'language' tem o nome do idioma (ex.: "Portuguese" -> "pt")
        else:
            text = story["text_en"]
            lang_code = "en"

        # Configurar o payload para o TTS
        tts_payload = {
            "model": "#g1_aura-luna-en",  # Ajuste o modelo caso suporte múltiplos idiomas
            "text": text,
        }

        # Fazer a chamada à API AIML TTS
        response = requests.post(
            AIML_TTS_URL,
            headers={
                "Authorization": f"Bearer {AIML_API_KEY}",
                "Content-Type": "application/json",
            },
            json=tts_payload,
        )

        # Verificar o status da resposta
        response.raise_for_status()

        # Salvar o áudio retornado pela API
        audio_data = response.content
        audio_dir = "temp"
        os.makedirs(audio_dir, exist_ok=True)  # Criar o diretório se necessário
        audio_path = os.path.join(audio_dir, f"{story_id}_{language}.mp3")

        with open(audio_path, "wb") as audio_file:
            audio_file.write(audio_data)

        # Retornar o arquivo de áudio
        return FileResponse(audio_path, media_type="audio/mpeg")

    except requests.exceptions.RequestException as e:
        return {"error": f"Request to AIML API failed: {str(e)}"}
    except Exception as e:
        return {"error": str(e)}

    







# Endpoint 9: Enviar Versão Relacionada
@app.post("/story/{story_id}/add-version/")
async def add_related_version(story_id: str, text: str):
    """Adiciona uma versão relacionada a uma história."""
    try:
        related_version = {"text": text, "created_at": datetime.now(timezone.utc).isoformat()}
        collection.update_one({"_id": ObjectId(story_id)}, {"$push": {"related_versions": related_version}})
        return {"message": "Version added successfully"}
    except Exception as e:
        return {"error": str(e)}
    




# Endpoint 10: Chat com a História
@app.post("/story/{story_id}/chat/")
async def chat_with_story(story_id: str, request: ChatRequest):
    """Interage com a história aberta."""
    try:
        # Recuperar a história
        story = collection.find_one({"_id": ObjectId(story_id)}, {"text_en": 1})
        if not story:
            return {"error": "Story not found"}
        
        # Configuração do prompt com a história
        prompt = f"Você é um assistente criativo. Aqui está uma história: '{story['text_en']}'. O usuário disse: '{request.user_message}'. Responda de forma envolvente e criativa."

        # Fazer a chamada à AIML API
        response = requests.post(
            url="https://api.aimlapi.com/chat/completions",
            headers={
                "Authorization": f"Bearer {AIML_API_KEY}",
                "Content-Type": "application/json",
            },
            data=json.dumps(
                {
                    "model": "meta-llama/Llama-3.2-3B-Instruct-Turbo",  # Substitua pelo modelo desejado
                    "messages": [
                        {
                            "role": "user",
                            "content": prompt,
                        }
                    ],
                    "max_tokens": 512,
                    "stream": False,
                }
            ),
        )

        # Verificar o status da resposta
        response.raise_for_status()
        result = response.json()

        # Retornar a resposta gerada pela AIML API
        return {"response": result.get("choices", [{}])[0].get("message", {}).get("content", "")}

    except requests.exceptions.RequestException as e:
        return {"error": f"Request to AIML API failed: {str(e)}"}
    except Exception as e:
        return {"error": str(e)}

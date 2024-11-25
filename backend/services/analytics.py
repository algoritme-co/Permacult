from fastapi import APIRouter, HTTPException
from pymongo import MongoClient
from collections import Counter
from bson.objectid import ObjectId
from datetime import datetime
import requests
import os
import json

# Configuração do MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["permacult_db"]
collection = db["stories"]

# Configuração da API AIML
AI_ML_API_KEY = os.environ.get("AI_ML_API_KEY") or "df8b37fa88754ed68d7128c16f3a3f5b"
AIML_API_URL = "https://api.aimlapi.com/v1/chat/completions"

# Criação do roteador para o módulo de análises
router = APIRouter(prefix="/analytics", tags=["Analytics"])



def generate_insights_with_ai(texts):
    """
    Gera insights avançados usando IA.
    Envia o texto consolidado para a API e retorna os insights gerados.
    """
    try:
        # Construção do prompt para a IA
        prompt = (
            "Você é um assistente de análise cultural e literária. Aqui está uma coleção de textos "
            "sobre uma categoria específica. Gere insights baseados no conteúdo, incluindo:\n"
            "1. Resumo geral dos textos.\n"
            "2. Sentimentos predominantes (exemplo: positivo, nostálgico, reflexivo).\n"
            "3. Temas mais recorrentes.\n"
            "4. Palavras ou expressões marcantes e seus significados no contexto cultural.\n"
            "5. Comparações ou conexões culturais entre as histórias."
        )

        # Solicitação para a API de IA
        response = requests.post(
            AIML_API_URL,
            headers={
                "Authorization": f"Bearer {AI_ML_API_KEY}",
                "Content-Type": "application/json",
            },
            data=json.dumps(
                {
                    "model": "meta-llama/Llama-3.2-3B-Instruct-Turbo",  # Substitua pelo modelo desejado
                    "messages": [
                        {"role": "system", "content": prompt},
                        {"role": "user", "content": texts},
                    ],
                    "max_tokens": 1024,
                    "temperature": 0.7,
                }
            ),
        )

        # Verifica a resposta
        response.raise_for_status()
        result = response.json()

        # Extrair os insights gerados
        insights = result.get("choices", [{}])[0].get("message", {}).get("content", "")
        return insights
    except requests.exceptions.RequestException as e:
        raise ValueError(f"Erro ao conectar à API de IA: {str(e)}")
    except Exception as e:
        raise ValueError(f"Erro ao gerar insights com IA: {str(e)}")

@router.get("/categories/{category}/insights/")
async def get_category_insights(category: str):
    """
    Gera insights para uma categoria específica utilizando IA.
    Retorna dados analíticos avançados sobre as histórias daquela categoria.
    """
    try:
        # Consulta todas as histórias relacionadas à categoria
        stories = list(collection.find({"categories.themes": category}, {"text_en": 1}))
        if not stories:
            raise HTTPException(status_code=404, detail="Nenhuma história encontrada para a categoria especificada.")

        # Combina os textos das histórias em uma única string
        texts = "\n\n".join([story["text_en"] for story in stories])

        # Gera os insights com IA
        insights = generate_insights_with_ai(texts)
        return {"category": category, "insights": insights}
    except HTTPException as e:
        raise e
    except Exception as e:
        return {"error": str(e)}

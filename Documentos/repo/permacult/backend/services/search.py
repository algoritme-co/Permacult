from fastapi import APIRouter, HTTPException
from pymongo import MongoClient
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from pydantic import BaseModel
import os
import requests
import json

# Configuração do MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["permacult_db"]
collection = db["stories"]

# Configuração da API AIML
AI_ML_API_KEY = os.environ.get("AI_ML_API_KEY") or "df8b37fa88754ed68d7128c16f3a3f5b"
AIML_EMBEDDING_URL = "https://api.aimlapi.com/v1/embeddings"

# Criação do roteador para o módulo de busca
router = APIRouter(prefix="/search", tags=["Search"])

class SearchRequest(BaseModel):
    query: str
    top_k: int = 5

def get_text_embedding(text):
    """Obtém o embedding de um texto usando a API AIML."""
    try:
        response = requests.post(
            AIML_EMBEDDING_URL,
            headers={
                "Authorization": f"Bearer {AI_ML_API_KEY}",
                "Content-Type": "application/json",
            },
            data=json.dumps({"model": "text-embedding-3-large", "input": text}),
        )
        response.raise_for_status()
        return np.array(response.json()["data"][0]["embedding"])
    except requests.exceptions.RequestException as e:
        raise ValueError(f"Erro ao conectar à API de embeddings: {str(e)}")

@router.post("/")
async def search_stories(request: SearchRequest):
    """
    Busca histórias semanticamente relacionadas à consulta fornecida.
    """
    try:
        # Obter embedding da consulta
        query_embedding = get_text_embedding(request.query)

        # Recuperar histórias com embeddings válidos
        stories = list(collection.find({"embedding": {"$exists": True, "$ne": None}}, {"_id": 1, "text_en": 1, "embedding": 1}))
        if not stories:
            raise HTTPException(status_code=404, detail="Nenhuma história encontrada com embeddings.")

        # Extrair embeddings e calcular similaridades
        embeddings = np.array([story["embedding"] for story in stories])
        similarities = cosine_similarity([query_embedding], embeddings)[0]

        # Selecionar os top_k resultados mais similares
        sorted_indices = np.argsort(similarities)[::-1][:request.top_k]
        results = [
            {
                "id": str(stories[i]["_id"]),
                "text_en": stories[i]["text_en"],
                "similarity_score": similarities[i],
            }
            for i in sorted_indices
        ]

        return {"query": request.query, "results": results}

    except HTTPException as e:
        raise e
    except Exception as e:
        return {"error": str(e)}

from fastapi import APIRouter, HTTPException
from pymongo import MongoClient
from geopy.geocoders import Nominatim
from collections import defaultdict
import asyncio
import json
from pathlib import Path

# Configuração do roteador
router = APIRouter()

# Configuração do MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["permacult_db"]
collection = db["stories"]

# Configuração do geolocalizador
geolocator = Nominatim(user_agent="geoapi", timeout=10)

# Diretório para salvar o arquivo JSON
OUTPUT_FILE = Path("output/stories_by_country.json")
OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

# Carregar mapeamento de nomes de países
with open("country_name_mapping.json", "r", encoding="utf-8") as f:
    COUNTRY_NAME_MAPPING = json.load(f)

def normalize_country_name(country_name):
    """Normaliza os nomes dos países para os padrões do GeoJSON."""
    return COUNTRY_NAME_MAPPING.get(country_name, country_name)

@router.get("/stories/by-country/")
async def get_stories_by_country():
    """Agrupa histórias por país e salva em um arquivo JSON."""
    try:
        # Obter dados do MongoDB
        pipeline = [
            {"$group": {"_id": "$location", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}}
        ]
        locations_data = list(collection.aggregate(pipeline))

        if not locations_data:
            raise HTTPException(status_code=404, detail="Nenhum dado encontrado.")

        # Função assíncrona para geocodificar cidades
        async def geocode_city(city):
            try:
                loop = asyncio.get_event_loop()
                location = await loop.run_in_executor(None, geolocator.geocode, city)
                await asyncio.sleep(1)  # Adicionar um atraso de 1 segundo entre as solicitações
                if location:
                    country = location.address.split(",")[-1].strip()
                    normalized_country = normalize_country_name(country)
                    return city, normalized_country
                else:
                    return city, None
            except Exception as e:
                print(f"Erro ao processar cidade '{city}': {e}")
                return city, None

        # Processar cidades em paralelo
        tasks = [geocode_city(entry["_id"]) for entry in locations_data]
        geocoded_results = await asyncio.gather(*tasks)

        # Agregar contagens por país
        country_data = defaultdict(int)
        for entry, country in geocoded_results:
            if country:
                count = next((x["count"] for x in locations_data if x["_id"] == entry), 0)
                country_data[country] += count

        # Formatar o resultado
        formatted_result = [{"country": country, "count": count} for country, count in country_data.items()]

        # Salvar o resultado em um arquivo JSON
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            json.dump({"countries": formatted_result}, f, indent=4, ensure_ascii=False)

        return {"countries": formatted_result}

    except Exception as e:
        return {"error": str(e)}

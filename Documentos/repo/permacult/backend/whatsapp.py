from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
import os
import requests

app = FastAPI()

# Configuração de CORS
origins = [
    "http://localhost",
    "http://127.0.0.1",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuração do cliente Twilio
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER")

if not all([TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_NUMBER]):
    raise ValueError("As variáveis de ambiente do Twilio não estão configuradas corretamente.")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# Endpoints das APIs existentes
TEXT_API_URL = "http://127.0.0.1:8000/upload-text/"
AUDIO_API_URL = "http://127.0.0.1:8000/upload-audio/"

# Dicionário para armazenar dados temporários dos usuários
user_data = {}

@app.post("/whatsapp-webhook/")
async def whatsapp_webhook(request: Request):
    form_data = await request.form()
    incoming_msg = form_data.get("Body", "").strip()
    from_number = form_data.get("From", "")
    media_type = form_data.get("MediaContentType0", "")
    media_url = form_data.get("MediaUrl0", "")

    # Inicializa resposta Twilio
    resp = MessagingResponse()
    msg = resp.message()

    # Fluxo do bot
    if from_number not in user_data:
        user_data[from_number] = {"step": 0}

    step = user_data[from_number]["step"]

    if step == 0:
        msg.body(
            "Bem vindo ao canal da Permacult: 'Museum for the Conservation of Human Memory and Culture'.\n\n"
            "Por favor, qual é o seu nome?"
        )
        user_data[from_number]["step"] += 1

    elif step == 1:
        user_data[from_number]["name"] = incoming_msg
        msg.body("Qual é a sua idade?")
        user_data[from_number]["step"] += 1

    elif step == 2:
        user_data[from_number]["age"] = incoming_msg
        msg.body("Qual é a sua localização?")
        user_data[from_number]["step"] += 1

    elif step == 3:
        user_data[from_number]["location"] = incoming_msg
        msg.body("Agora envie sua mensagem. Pode ser por texto ou áudio.")
        user_data[from_number]["step"] += 1

    elif step == 4:
        if media_type.startswith("audio"):  # Caso seja áudio
            try:
                audio_response = requests.get(media_url)
                audio_file_path = f"/tmp/{from_number}.ogg"
                with open(audio_file_path, "wb") as f:
                    f.write(audio_response.content)

                params = {
                    "name": user_data[from_number]["name"],
                    "age": user_data[from_number]["age"],
                    "location": user_data[from_number]["location"],
                }
                with open(audio_file_path, "rb") as audio_file:
                    response = requests.post(
                        AUDIO_API_URL, params=params, files={"file": audio_file}
                    )
            except Exception as e:
                msg.body(f"Houve um erro ao processar seu áudio: {str(e)}.")
                return str(resp)

        else:  # Caso seja texto
            data = {
                "name": user_data[from_number]["name"],
                "age": user_data[from_number]["age"],
                "location": user_data[from_number]["location"],
                "text": incoming_msg,
            }
            try:
                response = requests.post(TEXT_API_URL, data=data)
            except Exception as e:
                msg.body(f"Houve um erro ao processar seu texto: {str(e)}.")
                return str(resp)

        # Respostas para sucesso ou erro
        if response.status_code == 200:
            client.messages.create(
                from_=f"whatsapp:{TWILIO_WHATSAPP_NUMBER}",
                body=(
                    "Sua mensagem foi processada com sucesso! Obrigado por contribuir para esta iniciativa.\n"
                    "Deseja enviar outra mensagem? Responda 'Sim' ou 'Não'."
                ),
                to=from_number,
            )
            user_data[from_number]["step"] = 5
        else:
            client.messages.create(
                from_=f"whatsapp:{TWILIO_WHATSAPP_NUMBER}",
                body=(
                    f"Houve um erro ao processar sua mensagem: {response.json().get('detail')}."
                ),
                to=from_number,
            )
            user_data[from_number]["step"] = 4

    elif step == 5:
        if incoming_msg.lower() in ["sim", "s"]:
            client.messages.create(
                from_=f"whatsapp:{TWILIO_WHATSAPP_NUMBER}",
                body="Por favor, qual é o seu nome?",
                to=from_number,
            )
            user_data[from_number]["step"] = 1
        else:
            client.messages.create(
                from_=f"whatsapp:{TWILIO_WHATSAPP_NUMBER}",
                body="Obrigado por sua participação! Até breve.",
                to=from_number,
            )
            del user_data[from_number]

    return str(resp)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("whatsapp:app", host="0.0.0.0", port=7000, reload=True)

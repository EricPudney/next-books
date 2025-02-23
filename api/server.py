# api/server.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

load_dotenv()  # Load API keys from .env file

app = FastAPI()

# Load OpenAI API Key
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.get("/test-api")
async def test_openai():
    try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": "Hello!"}]
        )
        
        return response
    except Exception as e:
        print("OpenAI API Error:", str(e))
        raise HTTPException(status_code=500, detail=f"OpenAI API Error: {str(e)}")

# Define request model
class ChatRequest(BaseModel):
    message: str

# seems stupid to divide this up but this has to return a ChatCompletion object which the FE doesn't like - temp fix
@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        response = await getResponse(request)
        return str(response.choices[0].message.content)
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=500, detail=str(e))

# seems stupid to divide this up but this has to return a ChatCompletion object which the FE doesn't like - temp fix
async def getResponse(request: ChatRequest):
    try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": "You are a chatbot promoting Eric's programming skills and availability for hire."},
                      {"role": "user", "content": request.message}]
        )
        return response
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=500, detail=str(e))
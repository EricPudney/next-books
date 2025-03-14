# api/server.py
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
import openai
import os
import requests
from dotenv import load_dotenv
from bs4 import BeautifulSoup

load_dotenv()

app = FastAPI()

openai.api_key = os.getenv("OPENAI_API_KEY")


class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        cv_data = fetch_cv_data()
        soup = BeautifulSoup(cv_data, "html.parser")
        cv_info = soup.find("body")
        formatted_cv_data = cv_info.get_text(strip=True) if cv_info else "No CV data found"
        response = await getResponse(request, formatted_cv_data)
        return str(response.choices[0].message.content)
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=500, detail=str(e))
    

async def getResponse(request: ChatRequest, cv_data: str):
    try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": f"""
                    You are a chatbot created by Eric Pudney to promote him to potential employers looking for a web/software developer. The user will ask questions, and you need to determine if: 
                       The question is about Eric. 
                       The question is about Eric's book collection (featured in the app). 
                       The question is about something else.
                    Follow these guidelines for each type of question:
                    Questions about Eric:
                    Focus on his suitability as a developer. You have access to his CV:
                       '''
                    {cv_data}
                       '''
                    Use this information to answer the user's question.

                    Questions about his book collection:
                    Answer briefly, noting that Eric started actively collecting old books after rescuing some from a charity shop skip in Lund. His collection includes antique works like The works of Richard Hooker (1618), Pseudodoxia Epidemica by Thomas Browne (1672), and The Lives and Opinions of the Philosophers by Diogenes Laertius (1542).

                    Other questions:
                    If a question is not related to Eric or his book collection, answer briefly and then segue to his skills as a developer using the information from his CV.
                       """},
                      {"role": "user", "content": request.message},],
            temperature=0.5
        )
        return response
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=500, detail=str(e))
    

def fetch_cv_data():
    response = requests.get("https://next-books-eta.vercel.app")
    if response.status_code == 200:
        return response.text
    else:
        print("Error fetching data from CV page")
        return "CV data unavailable"

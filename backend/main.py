from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from users import getUserById, getUsers

app = FastAPI()

# Enable CORS only for http://localhost:5173
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/hello")
async def read_root():
    return {"message": "Hello World from FastAPI again"}

@app.get("/api/users")
async def get_user():
    return getUsers()

@app.get("/api/users/{user_id}")
async def get_user_by_id(user_id: int):
    return getUserById(user_id)
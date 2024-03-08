import os
from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from modal import Image, Stub, asgi_app, Secret
from fastapi import Depends, HTTPException, status, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials


web_app = FastAPI()
stub = Stub("chiragrohit")
auth_scheme = HTTPBearer()


web_app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@web_app.get("/")
async def home():
    return {"message": "Hello World from modal.com using +page.server.js"}

# @web_app.get("/users")
# async def get_user():
#     return {"message": "Hello from /users"}

@web_app.get("/users")
async def get_user(token: HTTPAuthorizationCredentials = Depends(auth_scheme)):
    
    if token.credentials != os.environ["AUTH_TOKEN"]:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect bearer token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    return {"message": "Protected user's list"}





@stub.function(secrets=[Secret.from_name("chiragrohit-secret")])
@asgi_app()
def fastapi_app():
    return web_app
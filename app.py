from typing import Annotated, Optional
from fastapi import Depends, FastAPI, HTTPException, Query
from routers import users,devices
from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware
import  services as services

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

services.create_database()


app.include_router(users.router)
app.include_router(devices.router)

# app.include_router(devices.router)
# app.include_router(cameras.router)




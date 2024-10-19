from typing import Annotated, Optional
from fastapi import Depends, FastAPI, HTTPException, Query
from routers import users
from fastapi.security import OAuth2PasswordBearer
import  services as services

app = FastAPI()

services.create_database()


app.include_router(users.router)
# app.include_router(devices.router)
# app.include_router(cameras.router)




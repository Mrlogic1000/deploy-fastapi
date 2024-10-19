from pydantic import BaseModel
from datetime import datetime



class UserBase(BaseModel):
    username: str
    email: str


class UserCreate(UserBase):
    password: str

class User(UserBase):
    create_dt: datetime

    class Conifg:
        orm_mode:True

class UserUpdate(BaseModel):
    email: str


class CameraBase(BaseModel):    
    id: int
    location: str
    ip: str
    mac: str
    status: str | None= None
    serial: str
    model: str

class CameraCreate(CameraBase):
    pass

class Camera(CameraBase):
    class Config:
        orm_mode: True

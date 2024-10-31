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

class DeviceBase(BaseModel):
    id:int
    name: str
    ip: str
    mac: str
    type: str
    install: str
    serial_no: str
    model: str
    status: str

class DeviceCreate(DeviceBase):
    pass
    
    

class Device(DeviceBase):    
    create_dt: datetime
    class Config:
        orm_mode: True




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

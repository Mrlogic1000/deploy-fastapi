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
class DeviceUpdate(DeviceBase):
    pass
    
    
# class PortBase(BaseModel):    
#     name: str
#     type: str
#     neigbor: str 
   

# class PortCreate(PortBase):
#     owner_id: int


# class PortList(PortBase):
#     id:int
#     device_id: str
    # owner: Device
    # class Config:
    #     orm_mode: True

class Device(DeviceBase): 
    id:int 
    # port: list[PortList]  = []
    create_dt: datetime
    class Config:
        orm_mode: True





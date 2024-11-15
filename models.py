from typing import List, Optional
from database import Base
from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime




class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hash_password = Column(String, nullable=False)
    disabled = Column(String, unique=True)
    create_dt = Column(DateTime, default=datetime.utcnow())



class RessetPassword(Base):
    __tablename__ = "reset_password"
    email = Column(String, primary_key=True, index=True)
    code = Column(String)

class Device(Base):
    __tablename__ = "devices"
    id = Column(Integer, primary_key=True)
    name = Column(String,unique=True, index=True)
    ip = Column(String,unique=True,index=True)
    mac = Column(String,unique=True,index=True)
    type= Column(String)
    install = Column(String)
    serial_no = Column(String)
    model  = Column(String)
    status  = Column(String)
    create_dt = Column(DateTime, default=datetime.utcnow())
    # ports = relationship('Port', back_populates='ports')


# class Port(Base):
#     __tablename__ = "ports"
#     id = Column(Integer, primary_key=True)
#     name = Column(String, unique=True, index=True)
#     type = Column(String)
#     neibor = Column(String)
#     device_id = Column(Integer, ForeignKey("devices_id"))
#     owner = relationship('Device', back_populates='ports')

# class Camera(Base):
#     __tablename__ = "cameras"
#     id = Column(Integer, primary_key=True)
#     location = Column(index=True)
#     ip = Column(String, index=True)
#     mac = Column(String, index=True)
#     status = Column(Boolean, index=True)  
#     serial = Column(String, index=True)
#     model = Column(String, index=True)

# class Neighbor(Base):
#     __tablename__ = "neighbor"
#     id = Column(Integer, primary_key=True)
#     port = Column(String, index=True)
#     device = Column(String, index=True)
#     device_id = Column(String, index=True)
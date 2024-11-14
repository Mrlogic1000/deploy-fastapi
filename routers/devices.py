from fastapi import APIRouter, Query, HTTPException,status,Depends
from sqlalchemy.orm import Session
from models import Device
from schemal import Device as DeviceSchema, DeviceCreate,DeviceUpdate
from typing import Annotated,List
from sqlmodel import select
from database import get_db


router = APIRouter()


@router.post("/devices/", status_code=status.HTTP_201_CREATED)
async def create_device(device: DeviceCreate, db:Session = Depends(get_db)):
    db_device = Device(**device.model_dump())
    db.add(db_device)
    db.commit()    
    return ''

@router.get("/devices/", response_model=List[DeviceSchema])
async def get_device(skip: int = 1, limit: int = 10, db: Session = Depends(get_db)):
    devices = db.query(Device).all()
    print(devices)
    return devices

@router.get("/devices/{id}", response_model=DeviceSchema)
async def get_device(id:int, db: Session = Depends(get_db)):    
    db_devices = db.query(Device).filter(Device.id == id).first()
    if db_devices is None:
        raise HTTPException(status_code=404, detail="The object is not found")   
    return db_devices

@router.put('/devices/{id}')
def update_user(id:int, device: DeviceUpdate, db: Session = Depends(get_db)):    
    db_device = db.query(Device).filter(Device.id == id).first()
    if db_device is None:
        return None
    # Update model class variable from requested fields 
    for var, value in vars(device).items():
        setattr(db_device, var, value) if value else None 

    
    # db.add(db_device)
    db.commit()
    db.refresh(db_device)
    return db_device

@router.delete("/devices/{id}")
def delete_device(id:int, db: Session = Depends(get_db)):
    db_device = db.query(Device).filter(Device.id == id).first()
    
    if not db_device:
        raise HTTPException(status_code=404, detail="Device not found")
    db.delete(db_device)
    db.commit()
    return ''


# @router.get("/device/{device_id}", tags=["devices"])
# def read_device(device_id: int, session: Session) -> Device:
#     device = session.get(Device, device_id)
#     if not device:
#         raise HTTPException(status_code=404, detail="Device not found")
#     return device
# # Code above omitted 👆

# @router.get("/devices/", tags=["devices"])
# def read_devices(
#     session: Session,
#     offset: int = 0,
#     limit: Annotated[int, Query(le=100)] = 100,
# ) -> list[Device]:
#     devices = session.exec(select(Device).offset(offset).limit(limit)).all()
#     return devices


# @router.patch("/device/{device_id}", tags=["devices"])
# def update_device(device_id: int, session:Session)->Device:
#     device = session.get(Device, device_id)
#     if not device:
#         raise HTTPException(status_code=404, detail="Device not found")
#     statement = select(Device).where(Device.id == device_id)
#     results = session.exec(statement)
#     device = results.one()
#     print("Device:", device)
#     session.add(device)
#     session.commit()
#     session.refresh(device)
#     return device



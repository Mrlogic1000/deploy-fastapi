from fastapi import APIRouter, Query, HTTPException,status,Depends
from sqlalchemy.orm import Session
from models import Device
from schemal import Device as DeviceSchema, DeviceCreate
from typing import Annotated,List
from sqlmodel import select
from database import get_db


router = APIRouter()


@router.post("/devices/", status_code=status.HTTP_201_CREATED)
async def create_device(device: DeviceCreate, db:Session = Depends(get_db)):
    db_device = Device(    
        name = device.name,
        ip = device.ip,
        mac = device.mac,
        type = device.type,
        install = device.install,
        serial_no = device.serial_no,
        model = device.model,
        status = device.status        
    )
    db.add(db_device)
    db.commit()    
    return ''

@router.get("/devices/", response_model=List[DeviceSchema])
async def get_device(skip: int = 1, limit: int = 10, db: Session = Depends(get_db)):
    devices = db.query(Device).all()
    print(devices)
    return devices

@router.get("/devices/{id}", response_model=List[DeviceSchema])
async def get_device(skip: int = 1, limit: int = 10, db: Session = Depends(get_db)):
    devices = db.query(Device).all()
    print(devices)
    return devices
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


# @router.delete("/device/{device_id}", tags=["devices"])
# def delete_device(device_id: int, session: Session):
#     device = session.get(Device, device_id)
#     if not device:
#         raise HTTPException(status_code=404, detail="Device not found")
#     session.delete(device)
#     session.commit()
#     return {"ok": True}
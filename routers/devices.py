# from fastapi import APIRouter, Query, HTTPException
# from sqlalchemy.orm import Session
# from ..models import Device
# from typing import Annotated
# from sqlmodel import select


# router = APIRouter()


# @router.post("/devices/", tags=["devices"])
# def create_device(device: Device, session: Session) -> Device:
#     session.add(device)
#     session.commit()
#     session.refresh(device)
#     return device


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
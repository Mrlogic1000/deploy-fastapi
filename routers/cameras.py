# from fastapi import APIRouter, Query, HTTPException
# from sqlalchemy.orm import Session
# from ..models import Camera
# from typing import Annotated
# from sqlmodel import select


# router = APIRouter()


# @router.post("/cameras/", tags=["cameras"])
# def create_camera(camera: Camera, db: Session) -> Camera:
#     db.add(camera)
#     db.commit()
#     db.refresh(camera)
#     return camera


# @router.get("/camera/{camera_id}", tags=["cameras"])
# def read_camera(camera_id: int, db: Session) -> Camera:
#     camera = db.get(Camera, camera_id)
#     if not camera:
#         raise HTTPException(status_code=404, detail="Camera not found")
#     return camera
# # Code above omitted 👆

# @router.get("/cameras/", tags=["cameras"])
# def read_cameras(
#     db: Session,
#     offset: int = 0,
#     limit: Annotated[int, Query(le=100)] = 100,
# ) -> list[Camera]:
#     cameras = db.exec(select(Camera).offset(offset).limit(limit)).all()
#     return cameras


# @router.patch("/camera/{camera_id}", tags=["cameras"])
# def update_camera(camera_id: int, db:Session)->Camera:
#     camera = db.get(Camera, camera_id)
#     if not camera:
#         raise HTTPException(status_code=404, detail="Camera not found")
#     statement = select(Camera).where(Camera.id == camera_id)
#     results = db.exec(statement)
#     camera = results.one()
#     print("Camera:", camera)
#     db.add(camera)
#     db.commit()
#     db.refresh(camera)
#     return camera


# @router.delete("/camera/{camera_id}", tags=["cameras"])
# def delete_camera(camera_id: int, db: Session):
#     camera = db.get(Camera, camera_id)
#     if not camera:
#         raise HTTPException(status_code=404, detail="Camera not found")
#     db.delete(camera)
#     db.commit()
#     return {"ok": True}
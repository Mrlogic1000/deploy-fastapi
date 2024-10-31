from fastapi import APIRouter, Query, HTTPException, status, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import Annotated
from models import User
from schemal import UserCreate, UserUpdate, User as UserSchema
from database import get_db
import services as services


router = APIRouter()

@router.post("/signup/", status_code=status.HTTP_201_CREATED)
async def create_users(user: UserCreate, db:Session = Depends(get_db)):
    db_user = await services.existing_user(db, user.username, user.email)
    if db_user:
        raise HTTPException(
            status_code= status.HTTP_409_CONFLICT,
            detail="username or email already exist"
        )
    db_user = await services.create_user(db,user)
    access_token = await services.create_access_token(db_user.id, db_user.username)
    return {
        "access_token": access_token,
        "token_type": "beerer",
        "username": db_user.username
    }
@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    db_user = await services.authenticate(db, form_data.username, form_data.password)
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="incorect username or password"
            )
    access_token = await services.create_access_token(db_user.id, db_user.username)
    return {
        "access_token": access_token,
        "token_type": "beerer"
       
    }
    

@router.get("/profile", response_model=UserSchema)
async def get_current_user(token: str, db: Session = Depends(get_db)):
    db_user = await services.get_current_user(db,token)
    if not db_user:
        HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="You are not authorize")
    return db_user



@router.put("/user/{username}", status_code=status.HTTP_204_NO_CONTENT)
async def update_user(username:str, token: str, user: UserUpdate, db: Session = Depends(get_db)):
    db_user = await services.get_current_user(db,token)
    if not db_user or db_user.username != username:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="you not authorized to update this user"
                            )
    db_user = await services.user_update(db,db_user,user)


@router.post("/resetpassword/sendcode")
async def reset_send_code(email: str, db: Session = Depends(get_db)):
    db_user = await services.existing_user(db,"",email)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User with the email not found")
    code = await services.generate_code(db,email)
    await services.fake_email_send(email,code)
    return code


@router.post("/resetpassword/verifycode")
async def reset_verify_code(email: str, code: str, db:Session = Depends(get_db)):
    return await services.verify_code(db,email,code)


@router.post("/resetpassword", status_code=status.HTTP_204_NO_CONTENT)
async def reset_password(email: str, password: str, db: Session = Depends(get_db)):
    db_user = await services.existing_user(db,"", email)
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="The user not found")
    await services.update_password(db,db_user,password)

@router.get("/")
async def root():
    return {"message": "Hello World"}         

# 594416
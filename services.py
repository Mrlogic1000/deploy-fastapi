from datetime import datetime, timedelta, timezone
from typing import Annotated
from sqlalchemy.orm import Session
import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from pydantic import BaseModel

from schemal import User as UserSchema, UserCreate, UserUpdate
from models import User as UserModel, RessetPassword as RPModel
from database import Base, engine
from random import randint





# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_database():
    return Base.metadata.create_all(bind=engine)

bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()


def verify_password(plain_password, hashed_password):
    return bcrypt_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return bcrypt_context.hash(password)


async def existing_user(db:Session, username: str, email:str):
    db_user = db.query(UserModel).filter(UserModel.username == username).first()
    if db_user:
        return db_user
    db_user = db.query(UserModel).filter(UserModel.email == email).first()
    if db_user:
        return db_user
    return None


    

async def authenticate(db: Session, username: str, password: str):
   db_user = db.query(UserModel).filter(UserModel.username == username).first()
   if not db_user:
        return False
   if not verify_password(password, db_user.hash_password):
        return False
   return db_user


async def create_access_token(id:int, username:str):
    encode = {"sub":username, "id":id}
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)   
    encode.update({"exp": expire})
    encoded_jwt = jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(db:Session, token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        id: int = payload.get("id")
        expires: datetime = payload.get("exp")
        # if expires > datetime.utcnow():
        #     return None
        if username is None or id is None:
            raise credentials_exception
        db_user = db.query(UserModel).filter(UserModel.id == id).first()
        print(db_user)
        return db_user
    except InvalidTokenError:
        raise credentials_exception    
    return None


async def get_current_active_user(
    current_user: Annotated[UserModel, Depends(get_current_user)],
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

async def create_user(db:Session, user:UserCreate):
    db_user = UserModel(
        username = user.username,
        email = user.email,
        hash_password = get_password_hash(user.password)
    )
    db.add(db_user)
    db.commit()
    
    return db_user


async def update_password(db:Session, user:UserModel, password:str):
    user.hash_password = get_password_hash(password)
    db.commit()


async def user_update(db:Session, db_user: UserModel, user_update: UserUpdate):
    db_user.email = user_update.email or db_user.email
    db.commit()
    db.refresh(db_user)



async def generate_code(db:Session, email:str):
    code = str(randint(100000,999999))
    db_reset = db.query(RPModel).filter(RPModel.email == email).first()
    if db_reset:
        db_reset.code = code
    else:
        db_reset = RPModel(email = email, code= code)
        db.add(db_reset)
    db.commit()
    return code

async def verify_code(db:Session, email:str, code: str):
    db_reset = db.query(RPModel).filter(RPModel.email == email).first()
    if not db_reset:
        return False
    return db_reset.code == code


async def fake_email_send(email:str, code: str):
    print(f"code sent to {email}")



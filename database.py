from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DB_URL = "sqlite:///./sql.db"
engine = create_engine(DB_URL, connect_args={"check_same_thread":False})

Sessional = sessionmaker(autocommit=False,autoflush=False,bind=engine)
Base = declarative_base()

def get_db():
    db = Sessional()
    try:
        yield db
    finally:
        db.close()


    




    

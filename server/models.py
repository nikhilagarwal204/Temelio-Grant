from pydantic import BaseModel, EmailStr
from datetime import datetime


class Nonprofit(BaseModel):
    name: str
    address: str
    email: EmailStr


class Foundation(BaseModel):
    email: EmailStr


class SentEmailRecord(BaseModel):
    nonprofit_email: EmailStr
    message_content: str
    sent_at: datetime = datetime.now()

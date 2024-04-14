from fastapi import FastAPI, HTTPException, Body
from models import Nonprofit, Foundation, SentEmailRecord
from typing import Dict, List
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# Set up CORS to allow all origins
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for simplicity.
nonprofits_db: Dict[str, Nonprofit] = {}
foundations_db: Dict[str, Foundation] = {}
sent_emails_db: Dict[str, List[SentEmailRecord]] = {}


def printFunc():
    print(nonprofits_db)
    print(foundations_db)
    print(sent_emails_db)


@app.post("/nonprofit/")
async def create_nonprofit(nonprofit: Nonprofit):
    if nonprofit.email in nonprofits_db:
        raise HTTPException(status_code=400, detail="Nonprofit already exists.")
    nonprofits_db[nonprofit.email] = nonprofit
    printFunc()
    return {"message": "Nonprofit created successfully."}


@app.post("/foundation/")
async def create_foundation(foundation: Foundation):
    if foundation.email in foundations_db:
        raise HTTPException(status_code=400, detail="Foundation already exists.")
    foundations_db[foundation.email] = foundation
    printFunc()
    return {"message": "Foundation created successfully."}


@app.post("/send-email/")
async def send_email(
    foundation_email: str = Body(...), nonprofit_emails: List[str] = Body(...)
):
    if foundation_email not in foundations_db:
        raise HTTPException(status_code=404, detail="Foundation not found.")

    for np_email in nonprofit_emails:
        np_info = nonprofits_db[np_email]
        message_content = (
            f"Sending money to nonprofit {np_info.name} at address {np_info.address}"
        )

        # Mocking email sending by printing the message.
        print(f"Email sent to {np_email}: {message_content}")

        sent_email = SentEmailRecord(
            nonprofit_email=np_email, message_content=message_content
        )

        if foundation_email not in sent_emails_db:
            sent_emails_db[foundation_email] = [sent_email]
        else:
            sent_emails_db[foundation_email].append(sent_email)
    printFunc()
    return {
        "message": f"Emails sent successfully from {foundation_email} to {len(nonprofit_emails)} nonprofits."
    }


@app.get("/sent-emails/")
async def view_sent_emails(email: str):
    foundation_email = email
    if foundation_email not in foundations_db:
        raise HTTPException(status_code=404, detail="Foundation not found.")

    if foundation_email not in sent_emails_db:
        raise HTTPException(
            status_code=404, detail="No emails sent from this foundation."
        )
    printFunc()
    return list(sent_emails_db[foundation_email])


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

import os
from datetime import datetime
from typing import List, Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import uuid

# Load environment variables
load_dotenv()

# MongoDB setup
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = "arikekpar_company"

app = FastAPI(title="Arikekpar & Company API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB client
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Models
class StatusResponse(BaseModel):
    status: str
    message: str
    timestamp: datetime

class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    organization: Optional[str] = Field(None, max_length=100)
    service: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=1, max_length=2000)

class ContactFormResponse(BaseModel):
    id: str
    status: str
    message: str
    timestamp: datetime

# API Routes
@app.get("/", response_model=StatusResponse)
async def root():
    return StatusResponse(
        status="success",
        message="Arikekpar & Company API is running",
        timestamp=datetime.now()
    )

@app.get("/api/status", response_model=StatusResponse)
async def get_status():
    return StatusResponse(
        status="success", 
        message="API is healthy",
        timestamp=datetime.now()
    )

@app.post("/api/contact", response_model=ContactFormResponse)
async def submit_contact_form(contact_request: ContactFormRequest):
    try:
        # Create contact submission document
        contact_id = str(uuid.uuid4())
        contact_data = {
            "_id": contact_id,
            "name": contact_request.name,
            "email": contact_request.email,
            "organization": contact_request.organization,
            "service": contact_request.service,
            "message": contact_request.message,
            "submitted_at": datetime.now(),
            "status": "new"
        }
        
        # Insert into MongoDB
        result = await db.contact_submissions.insert_one(contact_data)
        
        if result.inserted_id:
            return ContactFormResponse(
                id=contact_id,
                status="success",
                message="Thank you! We'll be in touch within 24 hours.",
                timestamp=datetime.now()
            )
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save contact form submission"
            )
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error processing contact form: {str(e)}"
        )

@app.get("/api/contact/submissions")
async def get_contact_submissions(limit: int = 50):
    """Admin endpoint to view contact submissions"""
    try:
        cursor = db.contact_submissions.find().sort("submitted_at", -1).limit(limit)
        submissions = await cursor.to_list(length=limit)
        
        # Convert ObjectId to string for JSON serialization
        for submission in submissions:
            submission["id"] = submission["_id"]
            del submission["_id"]
        
        return {
            "status": "success",
            "count": len(submissions),
            "submissions": submissions
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error retrieving submissions: {str(e)}"
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)

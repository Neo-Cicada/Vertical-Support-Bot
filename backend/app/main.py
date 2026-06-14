from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.db import async_session_factory

app = FastAPI(title="Vertical Support Bot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    try:
        async with async_session_factory() as session:
            await session.execute(text("SELECT 1"))
        return {"status": "ok", "db": "connected"}
    except Exception:
        return {"status": "ok", "db": "error"}

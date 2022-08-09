from fastapi import FastAPI
from app.api import router


app = FastAPI(
    title="Justificativas Bosch Backend",
    version="1.0.0"
)


app.include_router(router)

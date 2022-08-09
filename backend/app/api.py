from fastapi import APIRouter
from . import db

router = APIRouter(prefix="/api/users")


@router.post("/tryLogin")
async def try_login(login_info: db.LoginInfo):
    return db.try_login(login_info)

from pydantic.dataclasses import dataclass
from sqlmodel import create_engine, Session, select
from .models import User, Justificativa
from hashlib import sha256

ENGINE = create_engine("sqlite:///database.sqlite")


@dataclass
class LoginInfo:
    edv: str
    password: str


def try_login(login_info: LoginInfo):
    with Session(ENGINE) as session:
        encrypted_password = sha256(login_info.password.encode()).hexdigest()
        select_statement = select(User).where(User.edv == login_info.edv).where(User.senha == encrypted_password)
        query_result = session.exec(select_statement)
        for _ in query_result:
            return {"auth": True}

        return {"auth": False}

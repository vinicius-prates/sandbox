import datetime
from typing import Optional
from sqlmodel import Field, SQLModel, create_engine


class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    edv: str
    nome: str
    email: str
    senha: str
    turno: str
    permissao: str


class Justificativa(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_nome: str
    ocorrencia: str
    motivo: str
    data_inicio: datetime.datetime
    data_final: datetime.datetime


if __name__ == "__main__":
    engine = create_engine("sqlite:///../database.sqlite")
    SQLModel.metadata.create_all(engine)

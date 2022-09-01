import styled from "styled-components";
import BoschBackground from "../login/assets/bosch-background.png";
import axios from "axios";
import Notiflix from "notiflix";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormHeader } from "../../global_components/forms/header/FormHeader";
import { Button } from "../../global_components/inputs/button/Button";
import { InputText } from "../../global_components/inputs/input_text/InputText";

export const ForgotPassword = () => {
  const [edv, setEdv] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [errorEdv, setErrorEdv] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [errorConfSenha, setErrorConfSenha] = useState(false);

  const navigate = useNavigate();

  const errorMessage = (msg) => {
    Notiflix.Notify.failure(msg, { position: "center-top" });
  };

  async function ValidateLogin() {
    setErrorEdv(edv.length == 0);
    if (edv.length == 0) {
      errorMessage("Campo EDV vazio");
      return;
    }

    setErrorEdv(edv.length != 8 || /[a-zA-Z]/g.test(edv));
    if (edv.length != 8 || /[a-zA-Z]/g.test(edv)) {
      errorMessage("EDV Inválido (Precisa possuir 8 dígitos)");
      return;
    }

    setErrorEmail(email.length == 0)
    if (email.length == 0){
        errorMessage("Campo Email vazio");
        return;
    }

    setErrorSenha(senha.length == 0)
    if (senha.length == 0) {
      errorMessage("Campo senha vazio");
      return;
    }

    setErrorConfSenha(confSenha.length == 0)
    if (confSenha.length == 0){
      errorMessage("Campo Confirmar senha vazio");
      return;
    }

    setErrorConfSenha(confSenha !== senha)
    setErrorSenha(confSenha !== senha)
    if (confSenha !== senha) {
      errorMessage("As senhas não conferem");
      return;
    }

    let colaboradorFound = false;

    if (
      !errorEdv && 
      !errorEmail &&
      !errorSenha &&
      !errorConfSenha
      ) {
      await axios
        .get("http://localhost:8000/api/colaboradores/")
        .then(({ data }) => {
            let contador_ultima_iter = data.length;
            data.forEach(async (colab) => {
                if (colab.edv == edv && colab.email == email) {
                  colaboradorFound = true;
                  await axios.patch(`http://localhost:8000/api/colaboradores/${colab.id}/`, {senha: senha})
                    .then(({data}) => {
                      Notiflix.Notify.success(`Colaborador ${data.nome} teve sua senha atualizada com sucesso.`);
                      navigate("/");
                    })
                    .catch(err => {
                      errorMessage("Algo aconteceu de errado. Entre em contato com a equipe de desenvolvimento quando possível.");
                      console.log(err);
                    })
                }

                contador_ultima_iter -= 1;
                if(contador_ultima_iter == 0){
                  if (!colaboradorFound) {
                    errorMessage("Colaborador inexistente.")
                  }
                }
            })
        })
        .catch(err => {
          errorMessage("Algo aconteceu de errado. Entre em contato com a equipe de desenvolvimento quando possível.");
          console.log(err);
        })
    }
  }

  return (
    <Main bg={BoschBackground}>
      <MainFormContainer>
        <FormHeader name="NOVA SENHA" />
        <Container>
          <InputText
            placeholder="EDV"
            value={edv}
            error={errorEdv}
            onchange={(evt) => setEdv(evt.target.value)}
            type="text"
          />
          <InputText
            placeholder="Email"
            value={email}
            error={errorEmail}
            onchange={(evt) => setEmail(evt.target.value)}
            type="email"
          />
          <InputText
            placeholder="Nova senha"
            value={senha}
            error={errorSenha}
            onchange={(evt) => setSenha(evt.target.value)}
            type="password"
          />
          <InputText
            placeholder="Confirmar nova senha"
            value={confSenha}
            error={errorConfSenha}
            onchange={(evt) => setConfSenha(evt.target.value)}
            type="password"
          />
          <div className="ButtonLoginContainer">
            <Button onClick={ValidateLogin}>Renovar Senha</Button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="ForgotPasswordLink"
            >
              Voltar
            </button>
          </div>
        </Container>
      </MainFormContainer>
    </Main>
  );
};

const Main = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const MainFormContainer = styled.div`
  background-color: white;
  width: 680px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  gap: 60px;

  & .ButtonLoginContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 5px;
    color: #287eff;

    & Button {
      padding: 0.5rem 0;
    }

    & .ForgotPasswordLink {
      font-size: 13px;
      cursor: pointer;
      border: 0;
      background-color: transparent;
      color: #287eff;

      &:hover {
        color: #73abff;
      }
    }
  }
`;

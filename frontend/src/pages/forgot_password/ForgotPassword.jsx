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
  const [errorEdv, setErrorEdv] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
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
      errorMessage("EDV Inválido");
      return;
    }

    setErrorEmail(email.length == 0)
    if (email.length == 0){
        errorMessage("Email Inválido")
        return;
    }

    if (!errorEdv) {
      await axios
        .get("http://127.0.0.1:8000/api/colaboradores/")
        .then(({ data }) => {
            data.map((item) => {
                item.edv == edv && item.email == email & navigate("/")
            })
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
  height: 500px;
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

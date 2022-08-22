import styled from "styled-components";
import Notiflix from "notiflix";
import { useState } from "react";
import { InputText } from "../../../../global_components/inputs/input_text/InputText";
import { Button } from "../../../../global_components/inputs/button/Button";
import { FormHeader } from "../../../../global_components/forms/header/FormHeader";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { createSession } from "../../../../session";

export const LoginForm = () => {
  const [edv, setEdv] = useState("");
  const [pass, setPass] = useState("");
  const [errorEdv, setErrorEdv] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const navigate = useNavigate();

  const errorMessage = (msg) => {
    Notiflix.Notify.failure(
      msg,
      { position: "center-top" }
    )
  }

  async function ValidateLogin() {

    setErrorEdv(edv.length == 0);
    if (edv.length == 0) {
      errorMessage("Campo EDV vazio");
      return
    }

    setErrorEdv(edv.length != 8 || /[a-zA-Z]/g.test(edv));
    if (edv.length != 8 || /[a-zA-Z]/g.test(edv)) {
      errorMessage("EDV Inválido");
      return
    }

    setErrorPass(pass.length == 0);
    if (pass.length == 0) {
      errorMessage("Campo SENHA vazia");
    }

    if (!errorEdv && !errorPass) {
      await axios.post('http://localhost:8000/api/tryLogin/', { edv: edv, senha: pass })
        .then(({ data }) => {
          if (data.auth) {
            createSession(data.colaborador);
            navigate('/admin');
          } else {
            errorMessage("Login incorreto");
          }
        })
    }
  }

  return (
    <Main>
      <FormHeader name="LOGIN" />
      <Container>
        <InputText
          placeholder="EDV"
          value={edv}
          error={errorEdv}
          onchange={(evt) => setEdv(evt.target.value)}
          type="text"
        />

        <InputText
          placeholder="Senha"
          value={pass}
          error={errorPass}
          onchange={(evt) => setPass(evt.target.value)}
          type="password"
        />
        <div className="ButtonLoginContainer">
          <Button name="Login" onClick={ValidateLogin} />
          <div className="ForgotPasswordLink">Esqueceu a senha?</div>
        </div>
      </Container>
    </Main>
  );
};

const Main = styled.div`
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

    & .ForgotPasswordLink {
      font-size: 13px;
      cursor: pointer;

      &:hover {
        color: #73abff;
      }
    }
  }
`;

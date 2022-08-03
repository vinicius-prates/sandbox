import styled from "styled-components";
import { useState } from "react";
import { InputText } from "../../../../global_components/inputs/input_text/InputText";
import { Button } from "../../../../global_components/inputs/button/Button";
import { FormHeader } from "../../../../global_components/forms/header/FormHeader";
import { AuthService } from "../../../../services/authService";


export const LoginForm = () => {
  const [edv, setEdv] = useState("");
  const [pass, setPass] = useState("");
  const [errorEdv, setErrorEdv] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  

  function ValidateLogin() {
    if (edv != "9289") {
      setErrorEdv(true);
    } else {
      setErrorEdv(false);
    }
    if (pass != "123") {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }

    if (!errorEdv && !errorPass){
      const auth = AuthService.tryLogin(edv, pass)
      if(auth){
        console.log("logado com sucesso")
      }else{
        console.log("login incorreto")
      }
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
        />

        <InputText
          placeholder="Senha"
          value={pass}
          error={errorPass}
          onchange={(evt) => setPass(evt.target.value)}
        />
        <div className="ButtonLoginContainer">
          <Button name="Login" onClick={ValidateLogin} />
          <div className="ForgetPasswordLink">Esqueceu a senha?</div>
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

    & .ForgetPasswordLink {
      font-size: 13px;
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";
import { useState } from "react";
import { InputText } from "../../../../global_components/inputs/input_text/InputText";
import { Button } from "../../../../global_components/inputs/button/Button";
import { Header } from "./header/Header";

export const LoginForm = () => {
  const [edv, setEdv] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Main>
      <Header />
      <Container>
        <InputText placeholder="EDV" />
        <InputText placeholder="Senha" />
        <div>
          <Button name="Entrar" />
          <div>Esqueceu a senha?</div>
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

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 5px;
    color: #287eff;

    & div {
      font-size: 13px;
      cursor: pointer;
    }
  }
`;

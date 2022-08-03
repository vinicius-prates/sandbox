import styled from "styled-components";
import { useState } from "react";
import { InputText } from "../../../../global_components/inputs/input_text/InputText";
import { Button } from "../../../../global_components/inputs/button/Button";
import { BoschLogo } from "../bosch_logo/BoschLogo";

export const LoginForm = () => {
  const [edv, setEdv] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Main>
      <HeaderContainer>
        <BoschLogo />
        <div>|</div>
        <div>LOGIN</div>
      </HeaderContainer>
      <InputContainer>
        <InputText placeholder="EDV" />
        <InputText placeholder="Senha" />
        <Button name="Entrar" />
      </InputContainer>
    </Main>
  );
};

const Main = styled.div`
  background-color: pink;
  width: 700px;
  height: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
`;

import styled from "styled-components";
import { useState } from "react";
import { BoschLine } from "./components/bosch_line/BoschLine";
import { InputText } from "../../global_components/inputs/input_text/InputText";
import { BoschLogo } from "./components/bosch_logo/BoschLogo";
import { Button } from "../../global_components/inputs/button/Button";

export const LoginPage = () => {
  const [edv, setEdv] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Main>
      <BoschLine />
      <FormContainer>
        <BoschLogo />
        <Form>
          <Header>Sign in</Header>
          <InputContainer>
            <InputText
              placeholder="EDV"
              value={edv}
              error={false}
              onchange={(evt) => setEdv(evt.target.value)}
            />
            <InputText
              placeholder="Password"
              value={pass}
              error={true}
              onchange={(evt) => setPass(evt.target.value)}
            />
            <Button name="Login" />
          </InputContainer>
        </Form>
      </FormContainer>
    </Main>
  );
};

const Main = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Form = styled.div`
  background-color: #fff;
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
`;

const Header = styled.div`
font-size: 1.5em;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

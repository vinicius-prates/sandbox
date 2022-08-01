import styled from "styled-components";
import { useState } from "react";
import { BoschLine } from "./components/bosch_line/BoschLine"
import { InputText } from '../../global_components/inputs/input_text/InputText'

export const LoginPage = () => {
  const [edv, setEdv] = useState("")
  const [pass, setPass] = useState("")

  return (
    <Main>
      <BoschLine />
      <Form>
        <div>Sign in</div>
        <InputText placeholder="EDV" value={edv} error={false} onchange={(evt) => setEdv(evt.target.value)}/>
        <InputText placeholder="Password" value={pass} error={true} onchange={(evt) => setPass(evt.target.value)}/>
      </Form>
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

const Form = styled.div`
  background-color: #fff;
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

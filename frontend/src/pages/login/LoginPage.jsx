import styled from "styled-components";
import { useState } from "react";
import { BoschLine } from "./components/bosch_line/BoschLine"
import { InputText } from '../../global_components/inputs/input_text/InputText'

export const LoginPage = () => {
  const [data, setData] = useState("")

  return (
    <Main>
      <BoschLine />
      <Form>
        <InputText value={data} error={data != ""} onchange={(evt) => setData(evt.target.value)}/>
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
  width: 450px;
  height: 350px;
`;

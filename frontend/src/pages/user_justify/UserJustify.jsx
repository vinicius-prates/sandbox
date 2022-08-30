import styled from "styled-components";
import { Navbar } from "../../global_components/Navbar/Navbar";
import { InputText } from "../../global_components/inputs/input_text/InputText";
import { SelectBox } from "../../global_components/inputs/select_box/SelectBox";
import { Button } from "../../global_components/inputs/button/Button";
import { useState } from "react";

export const UserJustify = () => {
  const [timeone, setTimeone] = useState("07:30");
  const [timetwo, setTimetwo] = useState("17:30");

  return (
    <>
      <Navbar />
      <WholeContentArea>
        <JustifyForm>
          <InputsContainerInForm>
            <InputsContainerFlex>
              <label>Nome:</label>
              <SelectBox options={[]} />
            </InputsContainerFlex>

            <InputsContainerFlex>
              <label>Ocorrencia:</label>
              <SelectBox options={[]} />
            </InputsContainerFlex>

            <DateContainer>
              <div>
                <label>De:</label>
                <InputText type="date" />
              </div>
              <div>
                <label>Até:</label>
                <InputText type="date" />
              </div>
            </DateContainer>

            <InputsContainerFlex>
              <label>Hora:</label>
              <InputText type="time" value={timeone} onchange={(evt) => setTimeone(evt.target.value)}  />
              <label>Até:</label>
              <InputText type="time" value={timetwo} onchange={(evt) => setTimetwo(evt.target.value)}  />
            </InputsContainerFlex>

            <TextAreaContainer>
              <label>Motivo:</label>
              <TextareaInput rows="3" cols="40" />
            </TextAreaContainer>

            <DivButton>
              <Button name="Enviar" />
            </DivButton>
          </InputsContainerInForm>
        </JustifyForm>
      </WholeContentArea>
    </>
  );
};

const WholeContentArea = styled.div`
  height: 100vh;
  background-color: #eff1f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JustifyForm = styled.div`
  background-color: white;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const InputsContainerInForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const InputsContainerFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextareaInput = styled.textarea`
  resize: none;
  border: 1px solid black;
  padding: 8px;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivButton = styled.div`
  width: 20%;
  height: 40px;
`;

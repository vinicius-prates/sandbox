import styled, { ThemeConsumer } from "styled-components";
import { Navbar } from "../../global_components/Navbar/Navbar";
import { InputText } from "../../global_components/inputs/input_text/InputText";
import { SelectBox } from "../../global_components/inputs/select_box/SelectBox";
import { Button } from "../../global_components/inputs/button/Button";
import { useState, useEffect } from "react";
import { getSession } from "../../session";
import axios from "axios";
import Notiflix from "notiflix";

export const UserJustify = () => {
  const [motivo, setMotivo] = useState("");
  const [timeone, setTimeone] = useState("07:30");
  const [timetwo, setTimetwo] = useState("17:30");
  const [dateone, setDateone] = useState(new Date().toISOString().split("T")[0]);
  const [datetwo, setDatetwo] = useState(new Date().toISOString().split("T")[0]);
  const [colaborador, setColaborador] = useState({});
  const [ocorrencia, setOcorrencia] = useState("Atraso na Entrada")

  const ocorrenciaOptions = [
    { value: "Atraso na Entrada", text: "Atraso na Entrada" },
    { value: "Saída antecipada", text: "Saída antecipada" },
    { value: "Falta", text: "Falta" },
    { value: "Afastamento", text: "Afastamento" },
    { value: "Intervalo Irregular", text: "Intervalo Irregular" },
    { value: "Crachá provisório", text: "Crachá provisório" },
  ];

  useEffect(() => {
    setColaborador(getSession());
  }, [])

  const createJustificativa = async () => {
    const justData = {
      ocorrencia: ocorrencia,
      data_inicio: dateone,
      data_fim: datetwo,
      horario_inicio: timeone,
      horario_fim: timetwo,
      motivo: motivo,
      justificado: "N",
      colaborador: colaborador.id
  };

    await axios
            .post("http://localhost:8000/api/justificativas/", justData)
            .then(({data}) => {
              Notiflix.Notify.success("Justificativa criada com sucesso.")
            })
            .catch((err) => {
              Notiflix.Notify.failure("Algo aconteceu de errado. Entre em contato com a equipe de desenvolvimento quando possível.")
              console.log(err)
            })
  }

  return (
    <>
      <Navbar />
      <WholeContentArea>
        <JustifyForm>
          <InputsContainerInForm>
            <InputsContainerFlex>
              <label>Nome:</label>
              <InputText value={colaborador.nome} readonly={true} />
            </InputsContainerFlex>

            <InputsContainerFlex>
              <label>Ocorrencia:</label>
              <SelectBox options={ocorrenciaOptions} onchange={setOcorrencia} />
            </InputsContainerFlex>
            <AcessibilityText>Data da Ocorrência</AcessibilityText>
            <DateContainer>
              <div>
                <label>De:</label>
                <InputText type="date" value={dateone} onchange={(evt) => setDateone(evt.target.value)} />
              </div>
              <div>
                <label>Até:</label>
                <InputText type="date" value={datetwo} onchange={(evt) => setDatetwo(evt.target.value)} />
              </div>
            </DateContainer>

            <AcessibilityText>Hora da Ocorrência</AcessibilityText>
            <InputsContainerFlex>
              <label>De:</label>
              <InputText type="time" value={timeone} onchange={(evt) => setTimeone(evt.target.value)} min={"07:30"} max={"17:30"} />
              <label>Até:</label>
              <InputText type="time" value={timetwo} onchange={(evt) => setTimetwo(evt.target.value)} min={"07:30"} max={"17:30"} />
            </InputsContainerFlex>

            <TextAreaContainer>
              <label>Motivo:</label>
              <TextareaInput 
               rows="4" 
               cols="50" 
               maxLength={400} 
               value={motivo} 
               onChange={(e) => setMotivo(e.target.value)} 
               />
            </TextAreaContainer>

            <DivButton>
              <Button onClick={createJustificativa}>Enviar</Button>
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

const AcessibilityText = styled.div`
color: gray;
`

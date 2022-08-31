import { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../global_components/Navbar/Navbar";
import { InputsContainer } from "./components/InputsContainer";
import { ListContainer } from "./components/ListContainer";
import { JustificativaInfo } from "./components/JustificativaInfo";
import { ListaSelecionados } from "./components/ListaSelecionados";
import { useEffect } from "react";

export const JustifyManage = () => {
  const [justificativas, setJustificativas] = useState([]);
  const [filtradas, setFiltradas] = useState([]);
  const [checklist, setChecklist] = useState(false);
  const [selecionados, setSelecionados] = useState([]);
  const [filtroSelecionado, setFiltroSelecionado] = useState("tudo");
  const [justificativaSelecionada, setJustificativaSelecionada] = useState();

  useEffect(() => {
    if (filtroSelecionado != "tudo") {
      setFiltradas(justificativas.filter(just => just.justificado == filtroSelecionado));
    } else {
      setFiltradas(justificativas);
    }
  }, [filtroSelecionado]);

  return (
    <>
      <Navbar />
      <Whole>
        <InputsContainer
          checklist={checklist}
          setChecklist={setChecklist}
          filtroSelecionado={filtroSelecionado}
          setFiltroSelecionado={setFiltroSelecionado}
          setJustificativaSelecionada={setJustificativaSelecionada}
        />
        <div className="ListContainerBlock">
          {checklist &&
            <ListContainer
              checklist
              justificativas={filtradas.length ? filtradas : justificativas}
              setJustificativas={setJustificativas}
              setJustificativaSelecionada={setJustificativaSelecionada}
              selecionados={selecionados}
              setSelecionados={setSelecionados}
            />}
          {!checklist &&
            <ListContainer
              justificativas={filtradas.length ? filtradas : justificativas}
              setJustificativas={setJustificativas}
              setJustificativaSelecionada={setJustificativaSelecionada}
            />}

          {justificativaSelecionada && <JustificativaInfo display={true} justificativa={justificativaSelecionada} />}
          {checklist && <ListaSelecionados selecionados={selecionados} />}
          {!justificativaSelecionada && !checklist && <JustificativaInfo display={false} />}

        </div>
      </Whole>
    </>
  );
};

const Whole = styled.div`
  height: 100vh;
  background-color: #eff1f2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ListContainerBlock{
    margin-top: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
  }
`;

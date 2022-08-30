import { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../global_components/Navbar/Navbar";
import { InputsContainer } from "./components/InputsContainer";
import { ListContainer } from "./components/ListContainer";
import { JustificativaInfo } from "./components/JustificativaInfo";

export const JustifyManage = () => {
  const [checklist, setChecklist] = useState(false);
  const [filtroSelecionado, setFiltroSelecionado] = useState("tudo");
  const [justificativaSelecionada, setJustificativaSelecionada] = useState();

  return (
    <>
      <Navbar />
      <Whole>
        <InputsContainer
          checklist={checklist}
          setChecklist={setChecklist}
          filtroSelecionado={filtroSelecionado}
          setFiltroSelecionado={setFiltroSelecionado}
        />
        <div className="ListContainerBlock">
          {checklist && <ListContainer checklist setJustificativaSelecionada={setJustificativaSelecionada} />}
          {!checklist && <ListContainer setJustificativaSelecionada={setJustificativaSelecionada} />}

          {justificativaSelecionada ?
            <JustificativaInfo display={true} justificativa={justificativaSelecionada} />
            :
            <JustificativaInfo display={false} />
          }

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

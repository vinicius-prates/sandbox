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
  const [filtroPesquisa, setFiltroPesquisa] = useState("");
  const [ocorrencia, setOcorrencia] = useState("todas")

  const ocorrenciaOptions = [
    { value: "todas", text: "Todas" },
    { value: "Atraso na Entrada", text: "Atraso na Entrada" },
    { value: "Saída antecipada", text: "Saída antecipada" },
    { value: "Falta", text: "Falta" },
    { value: "Afastamento", text: "Afastamento" },
    { value: "Intervalo Irregular", text: "Intervalo Irregular" },
    { value: "Crachá provisório", text: "Crachá provisório" },
  ];

  useEffect(() => {
    let arr_filtrar = justificativas;

    arr_filtrar = filtroSelecionado == "tudo" ? arr_filtrar :
      arr_filtrar = arr_filtrar.filter(just => just.justificado == filtroSelecionado);

    arr_filtrar = !filtroPesquisa.length ? arr_filtrar :
      arr_filtrar.filter(just => just.colaborador.nome.toLowerCase().includes(filtroPesquisa.toLowerCase()));

    arr_filtrar = ocorrencia == "todas" ? arr_filtrar :
      arr_filtrar.filter(just => just.ocorrencia == ocorrencia);

    setFiltradas(arr_filtrar);

  }, [filtroSelecionado, filtroPesquisa, ocorrencia]);

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
          setFiltroPesquisa={setFiltroPesquisa}
          filtroPesquisa={filtroPesquisa}
          setOcorrencia={setOcorrencia}
          ocorrenciaOptions={ocorrenciaOptions}
        />
        <div className="ListContainerBlock">
            <ListContainer
              checklist={checklist}
              justificativas={filtradas}
              setJustificativas={setJustificativas}
              setJustificativaSelecionada={setJustificativaSelecionada}
              selecionados={selecionados}
              setSelecionados={setSelecionados}
              setFiltradas={setFiltradas}
            />

          {justificativaSelecionada && <JustificativaInfo display={true} justificativa={justificativaSelecionada} setJustificativaSelecionada={setJustificativaSelecionada} />}
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

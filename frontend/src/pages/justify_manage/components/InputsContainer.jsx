import styled from "styled-components";
import { SearchBar } from "../../../global_components/inputs/search_bar/SearchBar";
import { SelectBox } from "../../../global_components/inputs/select_box/SelectBox";
import { CheckBox } from "../../../global_components/inputs/check_box/CheckBox";
import { Button } from "../../../global_components/inputs/button/Button";
import { useState } from "react";

export const InputsContainer = ({ checklist, setChecklist }) => {
  const [filtroSelecionado, setFiltroSelecionado] = useState("tudo")

  return (
    <InputContainer>
      <SearchBar placeholder="Pesquisar..." />
      <SelectBox options={[]} onchange={undefined} />
      <div className="checkboxContainer">
        <CheckBox label="Justificado" checked={filtroSelecionado == "justificado"} onChange={() => setFiltroSelecionado("justificado")} />
        <CheckBox label="Tudo" checked={filtroSelecionado == "tudo"} onChange={() => setFiltroSelecionado("tudo")} />
        <CheckBox label="Nao Justificado" checked={filtroSelecionado == "nao_justificado"} onChange={() => setFiltroSelecionado("nao_justificado")} />
      </div>
      <div className="btnContainer">
        <Button onClick={() => setChecklist(!checklist)}>Gerar Relatório</Button>
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  .checkboxContainer{
    display: flex;
    gap: 25px;
  }

  .btnContainer {
    width: 225px;
    height: 40px;
  }
`;

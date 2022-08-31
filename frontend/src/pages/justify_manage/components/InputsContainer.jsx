import styled from "styled-components";
import { SearchBar } from "../../../global_components/inputs/search_bar/SearchBar";
import { SelectBox } from "../../../global_components/inputs/select_box/SelectBox";
import { CheckBox } from "../../../global_components/inputs/check_box/CheckBox";
import { Button } from "../../../global_components/inputs/button/Button";

export const InputsContainer = ({ checklist, setChecklist, filtroSelecionado, setFiltroSelecionado, setJustificativaSelecionada }) => {

  const toggleCheckboxes = () => {
    setChecklist(!checklist);
    setJustificativaSelecionada(undefined);
  }

  return (
    <InputContainer>
      <SearchBar placeholder="Pesquisar..." />
      <SelectBox options={[]} onchange={undefined} />
      <div className="checkboxContainer">
        <CheckBox label="Justificado" checked={filtroSelecionado == "S"} onChange={() => setFiltroSelecionado("S")} />
        <CheckBox label="Tudo" checked={filtroSelecionado == "tudo"} onChange={() => setFiltroSelecionado("tudo")} />
        <CheckBox label="Nao Justificado" checked={filtroSelecionado == "N"} onChange={() => setFiltroSelecionado("N")} />
      </div>
      <div className="btnContainer">
        <Button onClick={toggleCheckboxes} selected={checklist}>Gerar Relatório</Button>
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

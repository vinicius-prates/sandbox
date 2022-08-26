import styled from "styled-components";
import { SearchBar } from "../../../global_components/inputs/search_bar/SearchBar";
import { SelectBox } from "../../../global_components/inputs/select_box/SelectBox";
import { CheckBox } from "../../../global_components/inputs/check_box/CheckBox";
import { Button } from "../../../global_components/inputs/button/Button";

export const InputsContainer = () => {
  return (
    <InputContainer>
      <SearchBar placeholder="Pesquisar..." />
      <SelectBox options={[]}/>
      <div className="checkboxContainer">
        <CheckBox name="Tudo" />
        <CheckBox name="Justificado" />
        <CheckBox name="Nao Justificado" />
      </div>
      <div className="btnContainer">
        <Button name="Gerar Relatório" />
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

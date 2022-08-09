import styled from "styled-components";
import { SearchBar } from "../../../global_components/inputs/search_bar/SearchBar";
import { SelectBox } from "../../../global_components/inputs/select_box/SelectBox";
import { CheckBox } from "../../../global_components/inputs/check_box/CheckBox";

export const InputsContainer = () => {
  return (
    <InputContainer>
      <SearchBar placeholder="Pesquisar..."/>
      <SelectBox />
      <CheckBox name='Tudo' />
      <CheckBox name='Justificado' />
      <CheckBox name='Nao Justificado' />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

import styled from "styled-components";
import { SearchBar } from "../../../global_components/inputs/search_bar/SearchBar";
import { SelectBox } from "../../../global_components/inputs/select_box/SelectBox";

export const InputsContainer = () => {
  return (
    <InputContainer>
      <SearchBar placeholder="Pesquisar..."/>
      <SelectBox />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

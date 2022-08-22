import styled from "styled-components";

export const SelectBox = () => {
  return (
    <Select>
      <option value="">Numero 1</option>
      <option value="">Numero 2</option>
      <option value="">Numero 3</option>
      <option value="">Numero 4</option>
    </Select>
  );
};

const Select = styled.select`
  width: 200px;
  height: 35px;
  padding: 0 10px;
  background-color: white;
  border: 0;
  border-radius: 10px;

  &:hover {
    background-color: #f9f9f9;
    transition: 150ms;
  }
`;

import styled from "styled-components";

export const SelectBox = ({label, options}) => {
  return (
    <Container>
    {label &&
    <Label>{label}</Label> }
    <Select>
      {options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
    </Select>
    </Container>
  );
};


const Container = styled.div`
  max-width: 150px;
`

const Label = styled.p`
  font-weight: bold;
  color: #bbbbbb;
`

const Select = styled.select`
  min-width: 150px;
  width: max-content;
  height: 35px;
  background-color: #f9f9f9;
  border: 0;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0;
    transition: 150ms;
  }
`;

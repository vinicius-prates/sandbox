import styled from "styled-components";

export const SelectBox = ({ label, options, onchange, maisClaro }) => {

  return (
    <Container>
      {label &&
        <Label>{label}</Label>}
      <Select onChange={(e) => onchange(e.target.value)} maisClaro={maisClaro}>
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
  background-color: ${props => props.maisClaro ? '#fcfcfc' : '#f9f9f9'};
  border: 0;
  border-radius: 10px;

  &:hover {
    background-color: ${props => props.maisClaro ? '#f8f8f8' : '#f0f0f0'};
    transition: 150ms;
  }
`;

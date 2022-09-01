import styled from "styled-components";

export const CheckBox = ({ label, checked, onChange }) => {
  return (
    <Box>
      {label}
      <input type="radio" name="radio" checked={checked} onChange={onChange} />
      <Checkmark className="checkmark"></Checkmark>
    </Box>
  );
};

const Box = styled.label`
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 16px;

  & > input {
    position: absolute;
    display: none;
  }

  &:hover > input ~ .checkmark {
    background-color: #f9f9f9;
  }

  & > input:checked ~ .checkmark:after {
    display: block;
  }

  & > .checkmark:after {
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #000000;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

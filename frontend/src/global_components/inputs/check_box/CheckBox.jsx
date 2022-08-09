import styled from "styled-components";

export const CheckBox = (props) => {
  return (
    <Box>
      {props.name}
      <input type="radio" name="radio" />
      <Checkmark className="checkmark"></Checkmark>
    </Box>
  );
};

const Box = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &:hover > input ~ .checkmark {
    background-color: #f9f9f9;
  }

  & > input:checked ~ .checkmark:after {
    display: block;
  }

  & > .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #000000;
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

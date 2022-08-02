import styled from "styled-components";

export const Button = (props) => {
  return <Btn>{props.name}</Btn>;
};

const Btn = styled.button`
  border: 0;
  background-color: #2394fc;
  width: 100%;
  padding: 10px 0px;
  font-size: 1em;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 1px black;
    transition: 150ms ease;
  }

  &:active {
    box-shadow: 1px 1px 1px black inset;
  }
`;

import styled from "styled-components";

export const Button = (props) => {
  return <Btn onClick={props.onClick} disabled={props.disabled} selected={props.selected}>{props.children}</Btn>;
};

const Btn = styled.button`
  border: 0;
  background-color: ${(props) => props.selected ? '#16538b' : '#2394fc'};
  width: 100%;
  height: 100%;
  font-size: 1em;
  color: white;
  cursor: ${props => props.disabled ? 'auto' : 'pointer'};
  opacity: ${props => props.disabled ? '40%' : '100%'};

  &:hover {
    box-shadow: 2px 2px 1px black;
    transition: 150ms ease;
  }

  &:active {
    box-shadow: 1px 1px 1px black inset;
  }

`;

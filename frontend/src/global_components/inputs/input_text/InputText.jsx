import styled from "styled-components";
import "./inputStyle.css";

export const InputText = (props) => {
  if (props.error) {
    return (
      <Wrapper>
        <input
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onchange}
          className="error"
          type={props.type}
        />
        <ErrorMsg>{props.placeholder} Inválido</ErrorMsg>
      </Wrapper>
    );
  }
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onchange}
      className="normal"
      type={props.type}
    />
  );
};

const ErrorMsg = styled.div`
  font-weight: 400;
  color: red;
`;
const Wrapper = styled.span`
  width: 100%;
`;

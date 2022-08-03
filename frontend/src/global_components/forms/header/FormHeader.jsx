import styled from "styled-components";
import { BoschLogo } from "../../bosch_logo/BoschLogo";

export const FormHeader = (props) => {
  return (
    <Main>
      <BoschLogo />
      <div>{props.name}</div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & div {
    font-size: 40px;
  }
`;

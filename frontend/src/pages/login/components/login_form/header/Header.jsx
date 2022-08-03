import styled from "styled-components";
import { BoschLogo } from "../bosch_logo/BoschLogo";

export const Header = () => {
  return (
    <Main>
      <BoschLogo />
      <div>LOGIN</div>
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

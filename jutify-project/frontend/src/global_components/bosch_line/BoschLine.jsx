import styled from "styled-components";
import BoschLineFade from "../../assets/bosch-line-fade.png";

export const BoschLine = () => {
  return (
    <Line>
      <img src={BoschLineFade} />
    </Line>
  );
};

const Line = styled.div`
  line-height: 0;

  & img{
    width: 100vw;
  }
`;

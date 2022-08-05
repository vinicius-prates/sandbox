import styled from "styled-components";
import LogoBoschSlash from "../../assets/bosch-logo-slash.png";
import LogoBoschDefault from "../../assets/bosch-logo-default.png";

export const BoschLogo = (props) => {
  if (props.slash) {
    return <Img src={LogoBoschSlash} />
  } else {
    return <Img src={LogoBoschDefault} />
  }
};

const Img = styled.img`
  height: 40px;
`

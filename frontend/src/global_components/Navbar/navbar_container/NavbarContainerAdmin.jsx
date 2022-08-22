import styled from "styled-components";
import { BoschLogo } from '../../bosch_logo/BoschLogo'
import { NavbarLinks } from '../links/NavbarLinks'
import { LogoutLink } from '../links/LogoutLink'

export const NavbarContainerAdmin = () => {
  return (
    <Nav>
      <BoschLogo slash={false} />
      <NavbarContent>
        <LinksContainer>
          <NavbarLinks name="Justificativas" link="/admManagePage"/>
          <NavbarLinks name="Cadastro" />
        </LinksContainer>
        <LogoutLink />
      </NavbarContent>
    </Nav>
  );
};

const Nav = styled.div`
  background-color: white;
  font-size: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

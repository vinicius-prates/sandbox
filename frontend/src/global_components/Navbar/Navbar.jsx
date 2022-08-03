import styled from "styled-components";
import { BoschLogo } from '../bosch_logo/BoschLogo'
import { NavbarLinks } from "./links/NavbarLinks";

export const Navbar = () => {
  return (
    <Nav>
      <BoschLogo slash={false} />
      <NavbarContent>
        <LinksContainer>
          <NavbarLinks name="Justificativas" />
          <NavbarLinks name="Cadastro" />
        </LinksContainer>
        <Logout>EX</Logout>
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
  gap: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logout = styled.div`
  font-size: 20px;
`;
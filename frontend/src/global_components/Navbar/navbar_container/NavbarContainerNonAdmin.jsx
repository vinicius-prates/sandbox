import styled from "styled-components";
import { BoschLogo } from "../../bosch_logo/BoschLogo";
import { LogoutLink } from "../links/LogoutLink";
import { useNavigate } from "react-router-dom";
import { endSession } from "./../../../session"

export const NavbarContainerNonAdmin = () => {
  const navigate = useNavigate();

  const logout = () => {
    endSession();
    navigate("/");
  }

  return (
    <Nav>
      <BoschLogo slash={false} />
      <NavbarContent>
        <LogoutLink onclick={logout} />
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

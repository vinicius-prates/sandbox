import styled from "styled-components";
import LogoutIcon from "../assets/logout-icon.png";

export const LogoutLink = () => {
  return (
    <Logout>
      <img src={LogoutIcon} />
    </Logout>
  );
};

const Logout = styled.div`
  line-height: 0;
  cursor: pointer;
`;

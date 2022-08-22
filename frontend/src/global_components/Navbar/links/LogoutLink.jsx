import styled from "styled-components";
import LogoutIcon from "../assets/logout-icon.png";

export const LogoutLink = (props) => {
  return (
    <Logout onClick={props.onclick}>
      <img src={LogoutIcon} />
    </Logout>
  );
};

const Logout = styled.button`
  line-height: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

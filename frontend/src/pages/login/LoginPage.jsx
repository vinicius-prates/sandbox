import styled from "styled-components";
import { LoginForm } from "./components/login_form/LoginForm";
import BoschBackground from "./assets/bosch-background.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSession } from "../../session";

export const LoginPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const session = getSession();
    if (session && session.perm == 'Admin') {
      navigate("/admin");
    }
  }, [])

  return (
    <Main bg={BoschBackground}>
      <LoginForm />
    </Main>
  );
};

const Main = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

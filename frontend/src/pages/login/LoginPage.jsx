import styled from "styled-components";
import { LoginForm } from "./components/login_form/LoginForm";
import BoschBackground from "./assets/bosch-background.png";
import "./index.css";

export const LoginPage = () => {
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
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: bold;
`;

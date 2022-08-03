import styled from "styled-components";
import { LoginForm } from "./components/login_form/LoginForm";

export const LoginPage = () => {
  return (
    <Main>
      <LoginForm />
    </Main>
  );
};

const Main = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

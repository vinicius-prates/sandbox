import styled from "styled-components";
import { LoginForm } from "./components/login_form/LoginForm"

export const LoginPage = () => {
  return (
    <Main>
      <FormContainer>
        <LoginForm />
      </FormContainer>
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
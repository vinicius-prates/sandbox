import styled from "styled-components";
import { Navbar } from '../../global_components/Navbar/Navbar'

export const LoginPage = () => {
  return (
    <Main>
      <Navbar />
      <Form>oi</Form>
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

const Form = styled.div`
  background-color: #fff;
  width: 450px;
  height: 350px;
`;

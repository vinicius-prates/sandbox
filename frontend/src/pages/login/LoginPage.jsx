import styled from "styled-components";
import { LoginForm } from "./components/login_form/LoginForm";
import BoschBackground from "./assets/bosch-background.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSession } from "../../session";
import { Link } from "react-router-dom";


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
      <Link className="link-devs" to="/developers">{'</>'}</Link>
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

  .link-devs{
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    border-radius: 8px;
    background-color: dodgerblue;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.4s;
    text-decoration: none;
    color: whitesmoke;
    font-size: 1.5rem;

    &:hover{
    background-color: #1977d6;
    
    }
  }
`



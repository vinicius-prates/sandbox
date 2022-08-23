import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSession } from "../../session";
import styled from "styled-components";
import Notiflix from "notiflix";
import { Navbar } from "../../global_components/Navbar/Navbar";
import { FormHeader } from "../../global_components/forms/header/FormHeader";
import { InputText } from "../../global_components/inputs/input_text/InputText";
import { useState } from "react";
import { SelectBox } from "../../global_components/inputs/select_box/SelectBox";
import { Button } from "../../global_components/inputs/button/Button";

export const RegisterPage = () => {
    
    const [nome, setNome] = useState("");
    const [edv, setEdv] = useState("");
    const [password, setPass ] = useState("");
    const [confirmPass, setConfPass] = useState("");
    const [email, setEmail] = useState(""); 




    const navigate = useNavigate();

    const errorMessage = (msg) => {
        Notiflix.Notify.failure(
          msg,
          { position: "center-top" }
        )
      }

    useEffect(() => {
        const session = getSession();
        if (session && session.perm != 'Admin') {
        navigate("/");
        errorMessage("Você não está logado como administrador.")
        }
    }, [])
  

    return (
        <>
        <Navbar/>
        <Content>
        <RegisterForm>
            <FormHeader name="CADASTRO"/>
            <RegisterInputs>
                <InputText
                placeholder="Nome Completo"
                value={nome}
                onchange={(evt) => setNome(evt.target.value)}
                type="text"/>

                <InputText
                placeholder="EDV"
                value={edv}
                onchange={(evt) => setEdv(evt.target.value)}
                type="text"/>
                
                <InputText 
                placeholder="Senha"
                value={password}
                onchange={(evt) => setPass(evt.target.value)}
                type="password"/>

                <InputText
                placeholder="Confirmar a Senha"
                value={confirmPass}
                onchange={(evt) => setConfPass(evt.target.value)}
                type="password"/>

                <InputText
                placeholder="Email"
                value={email}
                type="email"/>
                
                <SelectBoxesDiv>
                <SelectBox/>
                <SelectBox/>
                </SelectBoxesDiv>
                    

            </RegisterInputs>
            <ButtonDiv>
            <Button name="Cadastrar"/>

            </ButtonDiv>
                
        </RegisterForm>
        </Content>
        </>
        
    )
}

const Content = styled.div `
    height: 92.5vh;
    width: 100vw;
    background-color: #eff1f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;

`
const RegisterForm = styled.div`
    width: 450px;
    background-color: #ffffff;
    padding: 70px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const SelectBoxesDiv = styled.div`
    display: flex;
    flex-direction: row;
`
const RegisterInputs = styled.div`
    margin: 20px 0 20px 0;

    display: flex;
    flex-direction:column ;
    gap: 40px;

`

const ButtonDiv = styled.div`
    

    width: 300px;
    height: 40px;
`
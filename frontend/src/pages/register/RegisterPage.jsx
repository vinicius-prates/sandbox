import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSession } from "../../session";
import styled from "styled-components";
import Notiflix from "notiflix";
import { Navbar } from "../../global_components/Navbar/Navbar";

export const RegisterPage = () => {

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
        <Navbar/>
        
    )
}
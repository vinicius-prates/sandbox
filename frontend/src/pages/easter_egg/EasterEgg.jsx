import styled from "styled-components"
import BoschBackGround from "./assets/bosch-background.png";
import GroupImage from "./assets/group-image.jpg"
import {Link} from 'react-router-dom';

export const EasterEgg = () => {

    return(
        <DivContainer bg={BoschBackGround}>
             <DivEasterEggInfo >
                <h1>Desenvolvedores</h1>
                <p>Alunos da turma 3 de smart automation 2022</p>
               <img src={GroupImage}/>
               <DivNameLinks>
                <div>
                <a href="https://github.com/iguoliveira" target="_blank">Igor Oliveira</a>
                <a href="https://github.com/tsuda12" target="_blank">Felipe Tsuda</a>
                <a href="https://github.com/viktormarinho" target="_blank">Viktor Marinho</a>
                <a href="https://github.com/eduardo-victor" target="_blank">Victor Eduardo</a>
                <a href="https://github.com/vinicius-prates" target="_blank">Vinicius Prates</a>
                </div>
               </DivNameLinks>
             </DivEasterEggInfo>
             <Link className="link-devs" to="/">Voltar</Link>
             

        </DivContainer>
    )
}

const DivContainer = styled.div`
    background-image: url(${(props) => props.bg});
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    color: whitesmoke;
    
    .link-devs{
    position: absolute;
    top: 3rem;
    left: 3rem;
    background-color: dodgerblue;
    border-radius: 8px;
    padding: 0.75rem;
    text-align: center;
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

const DivEasterEggInfo = styled.div`

    img{
        min-height: 20%;
        min-width: 20%;
        margin-top: 20px;
        width: 40%;
        height: 40%;
        border-radius: 20px;
    }

`

const DivNameLinks = styled.div`
    margin-top: 30px;
    font-size: 20px;
    gap:10px;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    flex-direction: row;
    width: 100vw;
    div{
        width: 30vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    a{  padding:10px;
        border-radius: 10px;
        background-color: whitesmoke;
        text-decoration: none;
        color: black;
        transition: 0.4s;
    }

    a:hover{
        transition: 0.4s;
        background-color: black;
        color: whitesmoke;
    }
    
    
`

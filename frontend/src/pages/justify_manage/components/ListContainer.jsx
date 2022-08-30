import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export const ListContainer = ({ checklist, setJustificativaSelecionada, setSelecionados, selecionados }) => {

  const [justificativas, setJustificativas] = useState([]);

  const toggleSelecionado = (just) => {
    let lista = [...selecionados];

    if (lista.includes(just)) {
      lista.pop(lista.indexOf(just));
      setSelecionados(lista)
      return
    }

    setSelecionados([...lista, just])
  }

  const getJustificativas = async () => {
    await axios.get("http://localhost:8000/api/justificativas/")
      .then(({ data }) => {
        setJustificativas(data)
      });
  }

  useEffect(() => {
    getJustificativas();
  }, [])


  if (checklist) {
    return (
      <PersonsListContainer>
        {justificativas.map((just) => {
          return (
            <JustificativaCheckBox key={just.id} htmlFor={`checkbox${just.id}`}>
              <div>
                <input type="checkbox" id={`checkbox${just.id}`} onClick={() => toggleSelecionado(just)} />
              </div>
              <div className="justInfo">
                <span>{just.colaborador.nome}</span> <span>{just.data_inicio}</span>
              </div>
            </JustificativaCheckBox>
          )
        })}
      </PersonsListContainer>
    )
  }
  return (
    <PersonsListContainer>
      {justificativas.map((just) => {
        return (
          <JustificativaButton key={just.id} onClick={() => setJustificativaSelecionada(just)}>
            {just.colaborador.nome} <span>{just.data_inicio}</span>
          </JustificativaButton>
        )
      })}
    </PersonsListContainer>
  )
};

const PersonsListContainer = styled.div`
  width: 30%;
  padding: 10px;
  background-color: white;
  overflow-y: scroll;
  height: 50%;
  visibility: ${props => props.invisible ? 'hidden' : 'visible'};
`;

const JustificativaButton = styled.button`
  padding: 8px 4px;
  color: black;
  font-weight: 500;
  font-size: large;
  background: transparent;
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition-duration: .2s;
  
  &:hover{
    background-color: whitesmoke;
  }
`;

const JustificativaCheckBox = styled.label`
  display: flex;
  gap: .5rem;
  padding: 8px 4px;
  color: black;
  font-weight: 500;
  font-size: large;
  background: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
  transition-duration: .2s;
  
  .justInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  &:hover{
    background-color: whitesmoke;
  }
`;
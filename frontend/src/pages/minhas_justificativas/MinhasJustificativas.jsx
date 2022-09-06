import { Navbar } from "../../global_components/Navbar/Navbar"
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getSession } from "../../session";
import { ListContainer } from "../justify_manage/components/ListContainer";
import { JustificativaInfo } from "../justify_manage/components/JustificativaInfo";
import axios from "axios";


export const MinhasJustificativas = () => {
    const [justificativas, setJustificativas] = useState([]);
    const [justificativaSelecionada, setJustificativaSelecionada] = useState();
    const user = getSession();

    const getJustificativas = async () => {
        await axios.get("http://localhost:8000/api/justificativas/")
            .then(({ data }) => {
                data = data.filter(just => {
                    if (just.colaborador.id == user.id) {
                        return {
                            ...just,
                            data_inicio: new Date(just.data_inicio).toLocaleDateString(),
                            data_fim: new Date(just.data_fim).toLocaleDateString(),
                        }
                    } else {
                        return false
                    }
                })
                setJustificativas(data)
            });
    }

    useEffect(() => {
        getJustificativas();
    }, []);

    return (
        <>
            <Navbar />
            <MainContainer>
                <div className="ListContainerBlock">
                    <ListContainer
                        justificativas={justificativas}
                        setJustificativas={setJustificativas}
                        setJustificativaSelecionada={setJustificativaSelecionada}
                        checklist={undefined}
                        selecionados={undefined}
                        setSelecionados={undefined}
                        setFiltradas={undefined}
                    />

                    {justificativaSelecionada && <JustificativaInfo display={true} justificativa={justificativaSelecionada} setJustificativaSelecionada={setJustificativaSelecionada} />}
                </div>
            </MainContainer>
        </>
    );
}

const MainContainer = styled.div`
    height: 100vh;
    background-color: #eff1f2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ListContainerBlock{
    margin-top: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
  }
`;
import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../global_components/inputs/button/Button";

export const JustificativaInfo = ({ display, justificativa }) => {

    useEffect(() => {
        console.log(justificativa)
    }, []);
    return (
        <>
            {display ?
                <JustificativaInfoContainer>
                    <PdfContainer>
                        <TituloJustificativa>
                            {justificativa.justificado == "S" ? "Justificado" : "Não Justificado"} - {justificativa.data_inicio} - Ocorrência: {justificativa.ocorrencia}
                        </TituloJustificativa>
                        <DescJustificativa>
                            {justificativa.motivo}
                        </DescJustificativa>
                    </PdfContainer>
                    <BtnBox>
                        <Button>Gerar PDF</Button>
                    </BtnBox>
                </JustificativaInfoContainer>
                :
                <JustificativaInfoContainer invisible />
            }
        </>
    )
}

const PdfContainer = styled.div`

`;

const BtnBox = styled.div`
    min-height: 2rem;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

const JustificativaInfoContainer = styled.div`
  width: 30%;
  padding: 10px;
  background-color: white;
  height: 50%;
  visibility: ${props => props.invisible ? 'hidden' : 'visible'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TituloJustificativa = styled.p`
    font-size: large;
    text-align: center;
    padding-top: 4px;
`;

const DescJustificativa = styled.p`
    margin-top: 2rem;
    text-align: center;
`;
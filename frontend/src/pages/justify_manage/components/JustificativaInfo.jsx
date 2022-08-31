import styled from "styled-components";
import { Button } from "../../../global_components/inputs/button/Button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { BoschLogo } from "../../../global_components/bosch_logo/BoschLogo";

export const JustificativaInfo = ({ display, justificativa }) => {

    const exportPdf = () => {
        document.querySelector("#pdfcontainerdiv").style.display = 'flex';
        html2canvas(document.querySelector("#pdfcontainerdiv")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4', false);
            pdf.addImage(imgData, 'PNG', 0, 0, 600, 450, undefined, false);
            pdf.save("download.pdf");
            document.querySelector("#pdfcontainerdiv").style.display = 'none';
        })
    }

    return (
        <>
            {display ?
                <JustificativaInfoContainer>
                    <PdfContainer id="pdfcontainerdiv">
                        <BoschLogo pdfMode />
                        <PdfTitulo>
                            Relatório de justificativa ETS - Feito no dia {new Date().toLocaleDateString()}
                        </PdfTitulo>
                        <br /><br />
                        <Line />
                        <PdfTitulo>
                            Colaborador: {justificativa.colaborador.nome} - EDV: {justificativa.colaborador.edv}
                        </PdfTitulo>
                        <PdfTitulo>
                            {justificativa.justificado == "S" ? "Justificado" : "Não Justificado"} - {justificativa.data_inicio} - Ocorrência: {justificativa.ocorrencia}
                        </PdfTitulo>
                        <PdfDescricao>
                            {justificativa.motivo}
                        </PdfDescricao>
                    </PdfContainer>
                    <div>
                        <TituloJustificativa>
                            Colaborador: {justificativa.colaborador.nome}
                        </TituloJustificativa>
                        <TituloJustificativa>
                            {justificativa.justificado == "S" ? "Justificado" : "Não Justificado"} - {justificativa.data_inicio} - Ocorrência: {justificativa.ocorrencia}
                        </TituloJustificativa>
                        <DescJustificativa>
                            {justificativa.motivo}
                        </DescJustificativa>
                    </div>
                    <BtnBox>
                        <Button onClick={exportPdf}>Gerar PDF</Button>
                    </BtnBox>
                </JustificativaInfoContainer>
                :
                <JustificativaInfoContainer invisible />
            }
        </>
    )
}

const PdfContainer = styled.div`
    width: 1024px;
    padding: 10px;
    background-color: white;
    height: 768px;
    visibility: ${props => props.invisible ? 'hidden' : 'visible'};
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: -15;
`;

const Line = styled.div`
    height: 2px;
    width: 75%;
    background-color: #b5b5b5;
    margin: .25rem auto;
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
    padding-top: 1rem;
`;

const DescJustificativa = styled.p`
    margin-top: 2rem;
    text-align: center;
`;

const PdfTitulo = styled.p`
    font-size: 1.75rem;
    text-align: center;
    padding-top: 1rem;
`;

const PdfDescricao = styled.p`
    font-size: 1.5rem;
    text-align: center;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
`;
import styled from "styled-components";
import { Button } from "../../../global_components/inputs/button/Button";
import { BoschLogo } from "../../../global_components/bosch_logo/BoschLogo";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const ListaSelecionados = ({ selecionados }) => {

    const exportarPdfs = () => {
        const pdf = new jsPDF('p', 'pt', 'a4', false);

        document.querySelector("#pdfcontainerlogo").style.display = 'flex';
        html2canvas(document.querySelector("#pdfcontainerlogo")).then(canvas => {
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 600, 450, undefined, false)
            document.querySelector("#pdfcontainerlogo").style.display = 'none';

            let counter_posicao = 1;
            let counter_loop = selecionados.length;

            selecionados.forEach((just) => {
                document.querySelector(`#pdfcontainerdiv${just.id}`).style.display = 'flex';
                html2canvas(document.querySelector(`#pdfcontainerdiv${just.id}`)).then(canvas => {
                    let imgData = canvas.toDataURL('image/png');
                    pdf.addImage(imgData, 'PNG', 0, (counter_posicao * 160), 600, 400, undefined, false);
                    counter_posicao++;
                    document.querySelector(`#pdfcontainerdiv${just.id}`).style.display = 'none';
                    counter_loop -= 1;
                    if (counter_loop === 0) {
                        pdf.save("Relatório.pdf");
                    }
                })
            })
        })
    }

    return (
        <>
            <PdfContainer id="pdfcontainerlogo">
                <BoschLogo pdfMode />
                <PdfTitulo>
                    Relatório de justificativas ETS - Feito no dia {new Date().toLocaleDateString()}
                </PdfTitulo>
            </PdfContainer>
            {
                selecionados.map(justificativa => {
                    return (
                        <PdfContainer key={justificativa.id} id={`pdfcontainerdiv${justificativa.id}`}>
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
                            <br /><br />
                        </PdfContainer>
                    )
                })
            }
            {
                <JustificativaInfoContainer>
                    <div>
                        {selecionados.map(just => <TituloJustificativa key={just.id}>{just.colaborador.nome}</TituloJustificativa>)}
                    </div>
                    <BtnBox>
                        <Button onClick={exportarPdfs}>Gerar PDF</Button>
                    </BtnBox>
                </JustificativaInfoContainer>
            }
        </>
    )
}

const BtnBox = styled.div`
    min-height: 2rem;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

const Line = styled.div`
    height: 2px;
    width: 75%;
    background-color: #b5b5b5;
    margin: .25rem auto;
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
    padding-top: .5rem;
`;


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
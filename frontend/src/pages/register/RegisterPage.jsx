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
import axios from "axios";

export const RegisterPage = () => {

    const [nome, setNome] = useState("");
    const [edv, setEdv] = useState("");
    const [password, setPass] = useState("");
    const [confirmPass, setConfPass] = useState("");
    const [email, setEmail] = useState("");

    const [errorNome, setErrorNome] = useState(false);
    const [errorEdv, setErrorEdv] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorSenhaConfirm, setErrorSenhaConfirm] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    const [turno, setTurno] = useState(2);
    const [perm, setPerm] = useState("Usuário")

    const [TurnoOptions, setTurnoOptions] = useState([{ value: 0, text: "Total" }]);

    const TipoUsuarioOptions = [
        { value: "Usuário", text: "Usuário comum" },
        { value: "Admin", text: "Administrador" },
        { value: "Super usuário", text: "Super usuário" }
    ];

    const navigate = useNavigate();

    const errorMessage = (msg) => {
        Notiflix.Notify.failure(
            msg,
            { position: "center-top" }
        )
    }

    const successMessage = (msg) => {
        Notiflix.Notify.success(
            msg,
            { position: "center-top" }
        )
    }

    const getTurnos = async () => {
        await axios.get("http://localhost:8000/api/turnos/")
            .then(({ data }) => {
                setTurnoOptions(data.map((turno) => {
                    return { value: turno.id, text: turno.descricao }
                }))
            })
    }

    useEffect(() => {
        const session = getSession();
        if (session && session.perm != 'Admin') {
            navigate("/");
            errorMessage("Você não está logado como administrador.")
        }

        getTurnos();
    }, [])

    const validateCadastro = async () => {

        setErrorNome(nome.length == 0);
        if (nome.length == 0) {
            errorMessage("Campo Nome vazio.")
            return
        }
        setErrorEdv(edv.length == 0);
        if (edv.length == 0) {
            errorMessage("Campo EDV vazio.  ")
            return
        }

        setErrorEdv(edv.length != 8);
        if (edv.length != 8) {
            errorMessage("O EDV precisa ter 8 dígitos.");
            return
        }

        setErrorEdv(/[a-zA-Z]/g.test(edv));
        if (/[a-zA-Z]/g.test(edv)) {
            errorMessage("O EDV deve conter apenas números.");
            return
        }

        setErrorSenha(password.length == 0);
        if (password.length == 0) {
            errorMessage("Campo Senha vazio.")
            return
        }

        setErrorSenhaConfirm(confirmPass.length == 0);
        if (confirmPass.length == 0) {
            errorMessage("Campo Confirmar Senha vazio.")
            return
        }

        setErrorSenhaConfirm(password != confirmPass);
        if (password != confirmPass) {
            errorMessage("As senhas não conferem.")
            return
        }

        setErrorEmail(email.length == 0)
        if (email.length == 0) {
            errorMessage("Campo Email vazio.")
            return
        }

        if (
            !errorEdv &&
            !errorEmail &&
            !errorSenha &&
            !errorNome &&
            !errorSenhaConfirm
        ) {
            await axios.post("http://localhost:8000/api/colaboradores/", {
                edv: edv,
                nome: nome,
                senha: password,
                email: email,
                perm: perm,
                turno: turno
            })
                .then(({ data }) => {
                    setEdv("")
                    setNome("")
                    setPass("")
                    setConfPass("")
                    setEmail("")

                    successMessage(`Usuário ${data.nome} criado com sucesso.`)
                })
                .catch(err => {
                    if (err.code === "ERR_BAD_REQUEST") {
                        errorMessage("EDV Já cadastrado.")
                    }
                })

        }
    }


    return (
        <>
            <Navbar />
            <Content>
                <RegisterForm>
                    <FormHeader name="CADASTRO" />
                    <RegisterInputs>
                        <InputText
                            placeholder="Nome Completo"
                            value={nome}
                            onchange={(evt) => setNome(evt.target.value)}
                            error={errorNome}
                            type="text" />

                        <InputText
                            placeholder="EDV"
                            value={edv}
                            onchange={(evt) => setEdv(evt.target.value)}
                            error={errorEdv}
                            type="text" />

                        <InputText
                            placeholder="Senha"
                            value={password}
                            onchange={(evt) => setPass(evt.target.value)}
                            error={errorSenha}
                            type="password" />

                        <InputText
                            placeholder="Confirmar a Senha"
                            value={confirmPass}
                            onchange={(evt) => setConfPass(evt.target.value)}
                            error={errorSenhaConfirm}
                            type="password" />

                        <InputText
                            placeholder="Email"
                            value={email}
                            onchange={(evt) => setEmail(evt.target.value)}
                            error={errorEmail}
                            type="email" />

                        <SelectBoxesDiv>
                            <SelectBox options={TurnoOptions} onchange={setTurno} label="Turno" />
                            <SelectBox options={TipoUsuarioOptions} onchange={setPerm} label="Tipo do Usuário" />
                        </SelectBoxesDiv>


                    </RegisterInputs>
                    <ButtonDiv>
                        <Button name="Cadastrar" onClick={validateCadastro} />

                    </ButtonDiv>

                </RegisterForm>
            </Content>
        </>

    )
}

const Content = styled.div`
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
    justify-content: space-between;
`
const RegisterInputs = styled.div`
    margin: 20px 0 20px 0;

    display: flex;
    flex-direction:column ;
    gap: 40px;

`

const ButtonDiv = styled.div`
    

    width: auto;
    height: 40px;
`
import axios from 'axios';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { useNavigate } from "react-router-dom";

export const LoginPage = () =>{

    const navigate = useNavigate();
    const [datas, setDatas] = useState([{}])
    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");

    const url = "http://localhost:8000/api/user/"
    useEffect(() => {
        axios.get(url).then(res => setDatas(res.data))
        console.log(datas)
    }, [])

    

    let data = {

        cpf: cpf,
        password: password
    }
    const loginUser = async () => {

        event.preventDefault()
        await axios.get(url).then(res => setDatas(res.data))
    
        datas.map((item, index) => {
            if(item.cpf == cpf && item.password == password){
                Notify.success("Logado com sucesso!")
                navigate(`/${cpf}/home`)
            }
            else {
                Notify.failure('CPF or password wrong.')
                navigate(`/login`)
            }
        })

        

    }


    return(
        <div>
            <NavBar/>
            <div className="flex justify-center align-middle w-full items-center h-[90vh]">

            <div className="flex flex-col text-center items-center gap-10  bg-gray-100 p-6 mx-6 rounded-lg w-96 h-96 shadow-xl shadow-gray-300">
                <h1 className="font-bold text-3xl ">Welcome Back!</h1>
                <form className="flex flex-col gap-6" onSubmit={loginUser}>

                <input placeholder="CPF" type="text" value={cpf} onChange={(evt) =>{setCPF(evt.target.value)}} className="p-1 border-b-2 focus:outline-none"></input>
                <input placeholder="Password" type="password" value={password} onChange={(evt) => {setPassword(evt.target.value)}} className="p-1 border-b-2 focus:outline-none"></input>
                <button className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-52  text-center
                    hover:bg-white hover:text-blue-600 ease-in-out duration-300 cursor-pointer">Log in</button>
                
                </form>
                <div className="flex gap-1 lg:mt-[-30px]  mt-[-25px]">
                    <p>New Here?</p>
                    <Link to="/register" className="text-blue-600 hover:text-blue-400 transition">Register</Link>
                </div>
            </div>
            
            </div>
            <Footer/>
        </div>
    )
}
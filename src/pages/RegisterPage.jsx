import '../App.css';
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';

export const RegisterPage = () => {


    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const url = 'http://localhost:8000/api/user/'

    var  data = {
        cpf: cpf,
        password: password
    }
    const saveUserRegister = () => {
        event.preventDefault()
        if(password == confirmPassword && password != "" ){

            axios.post(url, data)
        } else {
            console.log("senha inválida!")
        }
    }

    


    return(
        <div>
            <NavBar/>
            <div className="flex justify-center align-middle w-full items-center h-[90vh]">

                <div className="flex flex-col text-center items-center gap-10  bg-gray-100 p-6 mx-6 p rounded-lg w-[42rem] lg:h-[24rem] shadow-xl shadow-gray-300">
                    <h1 className="font-bold text-3xl ">First time here?</h1>
                    <div className="flex lg:flex-row flex-col gap-8">
                    <form className="flex flex-col gap-4" onSubmit={saveUserRegister}>
                        <input placeholder="CPF" type="text" value={cpf} onChange={(evt) =>{setCPF(evt.target.value)}} className="p-1 border-b-2 focus:outline-none"></input>
                        <input placeholder="Password" type="password" value={password} onChange={(evt) => {setPassword(evt.target.value)}} className="p-1 border-b-2 focus:outline-none"></input>
                        <input placeholder="Confirm Passpword" type="password" value={confirmPassword} onChange={(evt) => {setConfirmPassword(evt.target.value)}} className="p-1 border-b-2 focus:outline-none"></input>
                        <button className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-52  text-center
                        hover:bg-white hover:text-blue-600 ease-in-out duration-300 cursor-pointer">Register</button>
                    </form>

                    </div>
                    
                        <div className="flex gap-1 lg:mt-[-30px] lg:m-2">
                            <p>Already have a login?</p>
                        <Link to="/login" className="text-blue-600 hover:text-blue-400 transition">Login</Link>
                        </div>
                    
                    

                </div>
            </div>
            <Footer/>

        </div>
    )
}
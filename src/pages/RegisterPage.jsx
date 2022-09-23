import '../App.css';
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';

export const RegisterPage = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [data, getAllData]  = useState("");
    const url = 'http://localhost:8000/'
    const  getData = async () => {
        try {
            const {data} = await axios.get(`${url}api/client/`)
            console.log(data)
        }catch(err){
            console.log(err)
        }
        
    }
    return(
        <div>
            <NavBar/>
            <div className="flex justify-center align-middle w-full items-center h-[90vh]">

                <div className="flex flex-col text-center items-center gap-10  bg-gray-100 p-6 mx-6 p rounded-lg w-[42rem] lg:h-[24rem] shadow-xl shadow-gray-300">
                    <h1 className="font-bold text-3xl ">First time here?</h1>
                    <div className="flex lg:flex-row flex-col gap-8">
                    <div className="flex flex-col gap-4">

                    <input placeholder="Your name" type="text" className="p-1 border-b-2 focus:outline-none" ></input>
                    <input placeholder="Email" type="email" className="p-1 border-b-2 focus:outline-none" ></input>
                    <input placeholder="CPF" type="text" className="p-1 border-b-2 focus:outline-none"></input>
                    </div>
                    <div className="flex flex-col gap-4">
                    <input placeholder="Password" type="password" className="p-1 border-b-2 focus:outline-none"></input>
                    <input placeholder="Confirm Password" type="password" className="p-1 border-b-2 focus:outline-none" ></input>
                    <input placeholder="Birth date" type="date" className="p-1 border-b-2 focus:outline-none" ></input>

                    </div>
                    
                    </div>
                    <a className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-52  text-center
                        hover:bg-white hover:text-blue-600 ease-in-out duration-300 cursor-pointer">Register</a>
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
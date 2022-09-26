import '../App.css';
import { Link } from 'react-router-dom';
import { getSession } from '../Session';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const RegisterClientPage = () => {

    let session = getSession()
    useEffect (() => {
        let session = getSession()
        console.log(session.cpf)
    },[])


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sexo, setSexo] = useState("M");
    const [birth_date, setBirthDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const url = 'http://localhost:8000/api/client/'

    var data = {
        user: session.id,
        user_name: name,
        email: email,
        sexo: sexo,
        birth_date: birth_date,
        phone_number: phoneNumber
    }

    const saveClientRegister = () => {

        event.preventDefault()  
       
        axios.post(url, data)
     

    }


return(
    <>
    <div className="flex justify-center align-middle w-full items-center h-[90vh]">

    <div className="flex flex-col text-center items-center gap-10  bg-gray-100 p-6 mx-6 p rounded-lg w-[42rem] lg:h-[30 rem] shadow-xl shadow-gray-300">
    <h1 className="font-bold text-3xl ">Welcome to Exo! </h1>
    
    <div className="flex lg:flex-row flex-col gap-8">
    <form className="flex flex-col gap-4" onSubmit={saveClientRegister} >
        <input placeholder="Your Name"type="text" value={name} onChange={(evt) =>{setName(evt.target.value)}} className="p-1 border-b-2 focus:outline-none"></input>
        <input placeholder="example@gmail.com" value={email} onChange={(evt) =>{setEmail(evt.target.value)}} type="email"  className="p-1 border-b-2 focus:outline-none"></input>
        <select placeholder="Sex" value={sexo.value} onChange={(evt) =>{setSexo(evt.target.value)}} className="p-1 border-b-2 focus:outline-none">
            <option value="M" >Male</option>
            <option value="F">Female</option>
        </select>
        <input type="date" value={birth_date} onChange={(evt) =>{setBirthDate(evt.target.value)}}  className="p-1 border-b-2 focus:outline-none"></input>
        <input type="text" value={phoneNumber} onChange={(evt) =>{setPhoneNumber(evt.target.value)}}  placeholder="Phone Number" className="p-1 border-b-2 focus:outline-none"></input>
    
        <button className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-52  text-center
        hover:bg-white hover:text-blue-600 ease-in-out duration-300 cursor-pointer">Register</button>
    </form>

    </div>
    
      
    

</div>
</div>
    </>
)

}
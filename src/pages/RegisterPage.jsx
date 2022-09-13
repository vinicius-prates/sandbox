import '../App.css';
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar';

export const RegisterPage = () => {
    return(
        <div>
            <NavBar/>
            <div className="flex justify-center align-middle w-screen items-center h-[90vh]">

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
                    <a className=""></a>
                </div>
            </div>
        </div>
    )
}
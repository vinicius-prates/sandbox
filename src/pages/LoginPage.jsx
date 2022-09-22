import { Link } from 'react-router-dom';
import '../App.css';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
export const LoginPage = () =>{

    return(
        <div>
            <NavBar/>
            <div className="flex justify-center align-middle w-full items-center h-[90vh]">

            <div className="flex flex-col text-center items-center gap-10  bg-gray-100 p-6 mx-6 rounded-lg w-96 h-96 shadow-xl shadow-gray-300">
                <h1 className="font-bold text-3xl ">Welcome Back!</h1>
                <input placeholder="CPF" type="text" className="p-1 border-b-2 focus:outline-none"></input>
                <input placeholder="Password" type="password" className="p-1 border-b-2 focus:outline-none"></input>
                <a className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-52  text-center
                    hover:bg-white hover:text-blue-600 ease-in-out duration-300 cursor-pointer">Log in</a>
                
                <div className="flex gap-1 lg:mt-[-30px]  mt-[-25px]">
                    <p>New Here?</p>
                    <Link to="/register" className="text-blue-600">Register</Link>
                </div>
            </div>
            
            </div>
            <Footer/>
        </div>
    )
}
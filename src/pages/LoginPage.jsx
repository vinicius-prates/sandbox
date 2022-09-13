import '../App.css';
import { NavBar } from '../components/NavBar';
export const LoginPage = () =>{

    return(
        <div>
            <NavBar/>
            <div className="flex justify-center align-middle w-screen items-center h-screen ">

            <div className="flex flex-col text-center items-center gap-10  bg-gray-100 p-8 m-6 rounded-lg w-96 h-96">
                <h1 className="font-bold text-3xl ">Welcome Back!</h1>
                <input placeholder="CPF" type="text" className="p-1"></input>
                <input placeholder="Password" type="password" className="p-1"></input>
                <a className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-52  text-center
                    hover:bg-white hover:text-blue-600 ease-in-out duration-300">Log in</a>
                <a className=""></a>
            </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export const HomePage = () => {
    return(
        <div className="bg-[whitesmoke] ">
            <div className="h-screen flex flex-col">
                <NavBar/>
                <div className="bg-[url('./zimbas.jpg')] h-full bg-cover  bg-center flex items-center justify-center text-center ">
                    <div className=" px-14  bg-opacity-50 backdrop-blur-lg bg-[#faf9f6]  shadow py-10 gap-4 rounded-lg drop-shadow-2xl flex flex-col items-center border-2">
                        <h1 className="text-2xl font-bold text-white">Welcome to Exo!</h1>
                       
                        <img src="/logo.jpg" className="w-24 h-24"/>
                        <Link to="/register" className="text-white transition-all hover:border-blue-700 hover:text-blue-700 hover:font-bold border-b-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</Link>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
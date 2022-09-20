import '../App.css';
import { Link } from 'react-router-dom'
import Phone from '../assets/celular.png'

export const AboutExo = () => {
    return(
        <>
        <div className="bg-[#1B4372] bg-cover h-full flex flex-col p-6 gap-12">
            <div className="w-full">
                <img src={Phone} className="w-[100%] "></img>
            </div>
            <div className=" flex flex-col gap-10">
                <h1  className="text-white text-3xl">About exo</h1>
                <p className="text-white font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo lectus.
                 Phasellus in felis sed libero sagittis consequat. Curabitur et tellus turpis. Integer mattis odio ex,
                  a efficitur odio sagittis nec. Quisque eget nulla dolor. Suspendisse a interdum metus. Integer quis sem efficitur, 
                  sollicitudin sem non, vulputate tortor.</p>
                  <a  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-black   hover:bg-blue-700  rounded-xl" href="#">More Info</a>
            </div>
        </div>
        </>
    )

}
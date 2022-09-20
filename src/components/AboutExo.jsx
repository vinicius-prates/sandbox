import '../App.css';
import { Link } from 'react-router-dom'
import Phone from '../assets/celular.png'

export const AboutExo = () => {
    return(
        <>
        <div className="bg-[#1B4372] bg-cover h-full flex flex-col p-6 gap-12 lg:flex-row lg:space-content-evenly lg:py-10 lg:px-[20rem] " >
            <div className="w-full lg:w-[40%]">
                <img src={Phone} className="w-[100%] h-full  lg:w-[100%]"></img>
            </div>
            <div className=" flex flex-col gap-8 lg:w-[50%] justify-center ">
                <h1  className="text-white text-3xl lg:text-right ">About exo</h1>
                <p className="text-white lg:text-right font-thin tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo lectus.
                 Phasellus in felis sed libero sagittis consequat. Curabitur et tellus turpis. Integer mattis odio ex,
                  a efficitur odio sagittis nec. Quisque eget nulla dolor. Suspendisse a interdum metus. Integer quis sem efficitur, 
                  sollicitudin sem non, vulputate tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo lectus.
                 Phasellus in felis sed libero sagittis consequat.</p>
                  <a  className="block px-4 py-3 mb-2 leading-loose text-xl text-center text-white text-lg font-semibold bg-black w-[50%]  lg:self-end hover:bg-blue-700  rounded-2xl transition duration-200" href="#">More Info</a>
            </div>
        </div>
        </>
    )

}
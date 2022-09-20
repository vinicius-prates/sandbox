import '../App.css';
import { Link } from 'react-router-dom';
import  Cartoes  from '../assets/cartoes.png';

export const ForYou = () => {

    return(
        <div className="bg-[#161616] bg-cover text-center flex flex-col gap-4 py-8 px-6 justify-center">

            <h1 className="text-white text-2xl font-bold">For You</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-20">
            <div className=" flex flex-col lg:flex-col gap-5 align-center justify-center ">
            <p className="text-white lg:text-right font-thin tracking-wide text-xl">Cards for every option you want!</p>
            <a className="text-white   text-left border-b-2 w-[33%]" 
                href=''>Card Types -{'>'} </a>
            </div>
            <img src={Cartoes} className="w-full p-4 lg:w-[30%]  "></img>
            
            
            </div>
        </div>
    )
}
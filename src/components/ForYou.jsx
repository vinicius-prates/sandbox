import '../App.css';
import { Link } from 'react-router-dom';
import  Cartoes  from '../assets/cartoes.png';

export const ForYou = () => {

    return(
        <div className="bg-white bg-cover text-center flex flex-col gap-4 py-8 px-6 justify-center">

            <h1 className="text-[#161616] text-2xl font-bold">For You</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-20">
            
            <img src={Cartoes} className="w-full p-4 lg:w-[30%]  "></img>
            <div className=" flex flex-col lg:flex-col gap-5 align-center justify-center lg:w-[25%]">
            <h1 className="text-[#161616] lg:text-right font-bold tracking-wide text-2xl">Cards for every option you want!</h1>
            <p className="text-[#161616] lg:text-right font-bold tracking-wide text-lg ">Integer quis sem efficitur, 
                  sollicitudin sem non, vulputate tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo lectus.
                 Phasellus in felis sed libero sagittis consequat.</p>
            <a className="text-[#161616]   text-center border-black border-b-2 w-[50%] text-lg self-center lg:self-end lg:text-right lg:w-[32.5%]" 
                href=''>See Card Options </a>
            </div>
            
            
            </div>
        </div>
    )
}
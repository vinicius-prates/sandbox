import '../App.css';
import { Link } from 'react-router-dom';
import  Cartoes  from '../assets/cartoes.png';

export const ForYou = () => {

    return(
        <div className="bg-[#161616] bg-cover text-center flex flex-col gap-4 py-8 px-6 ">

            <h1 className="text-white text-2xl">For You</h1>
            <img src={Cartoes} className="w-full p-4 "></img>
            <p className="text-white lg:text-right font-thin tracking-wide">Cards for every option you want!</p>
            <a className="text-white border-b-2 w-[33%] self-center">Card Types -{'>'} </a>
        </div>
    )
}
import '../App.css';
import { Link } from 'react-router-dom';
import  Cartoes  from '../assets/cartoes.png';

export const ForYou = () => {

    return(
        <div className="bg-[#161616] bg-cover ">
            <img src={Cartoes} className="w-full p-4 "></img>
            <h1 className="text-white">asijasi</h1>
        </div>
    )
}
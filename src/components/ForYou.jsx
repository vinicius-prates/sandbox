import '../App.css';
import { Link } from 'react-router-dom';
import  Cartoes  from '../assets/cartoes.png';

export const ForYou = () => {

    return(
        <div className="bg-[#161616] bg-cover text-center flex flex-col gap-4 py-16 px-6 justify-center">

            <div className="flex flex-col lg:flex-row justify-center gap-20">
            <div className=" flex flex-col lg:flex-col gap-5 align-center justify-center lg:w-[25%]">
            <h1 className="text-white  lg:text-left font-bold tracking-wide text-3xl">Cards for every option you want!</h1>
            <p className="text-white  lg:text-left font-bold tracking-wide text-bs ">Integer quis sem efficitur, 
                  sollicitudin sem non, vulputate tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo lectus.
                 Phasellus in felis sed libero sagittis consequat.</p>
            <Link to="/cards" className="text-white   text-center border-white border-b-2 w-[50%] text-lg self-center lg:self-start lg:text-left lg:w-[32.5%]" 
                >See Card Options </Link>
            </div>
            <img src={Cartoes} className="w-96 p-4 lg:w-[30%]   "></img>
           
            
            
            </div>
        </div>
    )
}
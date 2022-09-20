import '../App.css';
import { Link } from 'react-router-dom'
import Phone from '../assets/celular.png'

export const AboutExo = () => {
    return(
        <>
        <div className="bg-[#161616] bg-cover h-[91.5vh] flex place-content-evenly">
            <div>
                <img src={Phone} className="w-[70%]"></img>
            </div>
            <div>
                <h1  className="text-white">About exo</h1>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo lectus.
                 Phasellus in felis sed libero sagittis consequat. Curabitur et tellus turpis. Integer mattis odio ex,
                  a efficitur odio sagittis nec. Quisque eget nulla dolor. Suspendisse a interdum metus. Integer quis sem efficitur, 
                  sollicitudin sem non, vulputate tortor.</p>
            </div>
        </div>
        </>
    )

}
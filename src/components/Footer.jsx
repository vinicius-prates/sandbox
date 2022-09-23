import '../App.css';
import { Link } from 'react-router-dom';

export const Footer = () => {

    return(
        <div className="bg-[#373737] w-full mb-0 flex flex-col p-16 gap-4 lg:flex-row lg:px-96">
            <div className="flex flex-col gap-2">
            <h1 className="text-[#646464] text-lg">Prates Copyright@2022</h1>
            <p className="text-[#646464] text-sm">Integer quis sem efficitur, 
                  sollicitudin sem non, vulputate tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet leo lectus.
                 Phasellus in felis sed libero sagittis consequat</p>
            </div>
            <div>

                <h1 className="text-[#646464] text-lg">Contacts</h1>
                <div className="flex gap-2">
                    <a href="https://github.com/vinicius-prates"><img src="https://img.icons8.com/666666/ios11/2x/github.png" className="w-[3rem] "/></a>
                    <a href="https://www.linkedin.com/in/vinicius-prates22/"> <img src="https://img.icons8.com/666666/ios11/2x/linkedin-circled.png" className="w-[3rem]  "/></a>
                    <a href="https://www.instagram.com/__viney"><img src="https://img.icons8.com/666666/ios11/2x/instagram-circle.png" className="w-[3rem]" /></a>

                    </div> 
            </div>
            
        </div>
    )
}
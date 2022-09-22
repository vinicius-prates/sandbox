import '../App.css';
import { Link } from 'react-router-dom'
import { BlackNavBar } from '../components/BlackNavBar';
import { Footer } from '../components/Footer';
import  GoldCard  from '../assets/card.png';
import ExclusiveCard from '../assets/card2.png';
import PlatinumCard from '../assets/card3.png';
export const CardsPage = () => {
    return(
        <>
        <BlackNavBar/>
        <div className="bg-[#252525] flex flex-col text-center py-12 gap-8">
            <h1 className="text-white text-4xl">3 Types of Cards!</h1>
            <div >
                <img src={GoldCard} className="bg-[#252525]"></img>
            </div>

            <div>
                <img src={ExclusiveCard} className=" bg-[#252525]"></img>
            </div>
            <div>
                <img src={PlatinumCard} className="bg-[#252525]"></img>
            </div>
        </div>
        <Footer/>
        </>
    )
}
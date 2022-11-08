import axios from "axios"
import { useEffect, useState } from "react"
import { SmallCard, SneakerProps } from "../components/SmallCard"
import sneakers from "../assets/Sneakers.png"
import { SmallNavBar } from "../components/SmallNavBar"
import { Link } from "react-router-dom"
export const AllSneakers = () => {
    

    const sneakersUrl = "http://localhost:8000/api/sneakers/"
    const [sneakerData, setSneakerData] = useState<SneakerProps[]>([])
    useEffect(()=> {
        axios.get(sneakersUrl).then(res => setSneakerData(res.data))
    },[])

    
    return(
        <>
        <SmallNavBar/>
        <div className="text-[#FAF9F6] font-bold italic  bg-cover bg-center w-full bg-[url('./assets/bg-green.png')] h-44 md:h-[30rem] flex flex-col justify-center md:text-6xl md:px-24 px-8 mb-8" >
            <Link to=""  className="opacity-70 hover:opacity-100 transition-all">Adidas</Link>
            <Link to="" className="opacity-70 hover:opacity-100 transition-all">Nike</Link>
            <Link to="" className="opacity-70 hover:opacity-100 transition-all">Jordan</Link>
            <Link to="" className="opacity-70 hover:opacity-100 transition-all">Yeezy</Link>
            <Link to="" className="opacity-70 hover:opacity-100 transition-all">New Balance</Link>

        </div>

        <div className="flex grid-cols-2 md:grid-cols-8  gap-8 justify-evenly mx-4">
            {sneakerData.map(sneaker => <div  key={sneaker.id  } >
                <SmallCard 
                    
                    name={sneaker.name}
                    price={sneaker.price}
                    image={sneaker.image}
                    condition={sneaker.condition}
                    brand={sneaker.brand}
/>
            </div>)}
        </div>
        </>
    )
}
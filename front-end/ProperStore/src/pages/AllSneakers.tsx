import axios from "axios"
import { useEffect, useState } from "react"
import { SmallCard, SneakerProps } from "../components/SmallCard"
import sneakers from "../assets/Sneakers.png"
import { SmallNavBar } from "../components/SmallNavBar"
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
            <h1 className="opacity-90">Adidas</h1>
            <h1 className="opacity-90">Nike</h1>
            <h1 className="opacity-90">Jordan</h1>
            <h1 className="opacity-90">Yeezy</h1>
            <h1 className="opacity-90">New Balance</h1>

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
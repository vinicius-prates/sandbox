import axios from "axios"
import { useEffect, useState } from "react"
import { SmallCard, SneakerProps } from "../components/SmallCard"
import sneakers from "../assets/Sneakers.png"
import { SmallNavBar } from "../components/SmallNavBar"
import { Link } from "react-router-dom"

type SneakerResponse = {
    id?: number,
    name: string, 
    price: number,
    description?: string,
    image: string, 
    size?: number
    brand: number
    condition: number
}

export const AllSneakers = () => {
    

    const sneakersUrl = "http://localhost:8000/api/sneakers/"
    const [sneakerData, setSneakerData] = useState<SneakerProps[]>([])
    useEffect(()=> {
        axios.get(sneakersUrl).then(res => {
            const rawSneakers: SneakerResponse[] = res.data;
            const sneakers = rawSneakers.map(async (sneaker: SneakerResponse) => {
                const sizeRes = await axios.get("http://localhost:8000/api/sneakers-sizes/" + sneaker.size);
                const conditionRes = await axios.get("http://localhost:8000/api/conditions/" + sneaker.condition)
                const brandRes = await axios.get("http://localhost:8000/api/brands/" + sneaker.brand)

                return {
                    ...sneaker,
                    size: sizeRes.data,
                    condition: conditionRes.data,
                    brand: brandRes.data,
                } as SneakerProps
            })

            Promise.all(sneakers).then(s => setSneakerData(s))
        })
    },[])

    
    return(
        <>
        <SmallNavBar/>
        <div className="text-[#FAF9F6] font-bold italic  bg-cover bg-center w-full bg-[url('./assets/bg-green.png')] h-44 md:h-[30rem] flex flex-col justify-center md:text-6xl md:px-24 px-8 mb-8" >
            <Link to="/adidas"  className="opacity-70 hover:opacity-100 transition-all">Adidas</Link>
            <Link to="/nike" className="opacity-70 hover:opacity-100 transition-all">Nike</Link>
            <Link to="" className="opacity-70 hover:opacity-100 transition-all">Jordan</Link>
            <Link to="/yeezy" className="opacity-70 hover:opacity-100 transition-all">Yeezy</Link>
            <Link to="/new-balance" className="opacity-70 hover:opacity-100 transition-all">New Balance</Link>

        </div>

        <div className="grid grid-cols-2 md:flex md:flex-wrap md:flex-start  gap-4 md:gap-8  mx-6  place-content-center">
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
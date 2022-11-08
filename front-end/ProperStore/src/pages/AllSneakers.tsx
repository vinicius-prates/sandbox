import axios from "axios"
import { useEffect, useState } from "react"
import { NavBar } from "../components/NavBar"

import { SmallCard, SneakerProps } from "../components/SmallCard"
export const AllSneakers = () => {
    

    const sneakersUrl = "http://localhost:8000/api/sneakers/"
    const [sneakerData, setSneakerData] = useState<SneakerProps[]>([])
    useEffect(()=> {
        axios.get(sneakersUrl).then(res => setSneakerData(res.data))
    },[])

    
    return(
        <>
        <NavBar/> 
        <h1 className="text-center text-2xl font-bold">All sneakers!</h1>
        <div className="flex grid-cols-2 gap-8 justify-evenly mx-4">
            {sneakerData.filter(sneaker => sneaker.brand.name == "Adidas").map(sneaker => <div  key={sneaker.id  } >
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
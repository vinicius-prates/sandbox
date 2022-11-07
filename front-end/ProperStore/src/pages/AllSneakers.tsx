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
        <div>
            {sneakerData.map(sneaker => <div>
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
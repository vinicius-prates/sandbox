import axios from "axios"
import { useEffect, useState } from "react"

 export interface SneakerProps {

    name: string, 
    price: number,
    description?: string,
    image: string, 
    size?: number,
    brand: number,
    condition: number
}

export const SmallCard = (props:SneakerProps) => {
 
    return( 
        <div>
            <div>
                <img src={props.image}/>
                </div>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
                <h3>{props.brand} - {props.condition}</h3>
                </div>

        </div>
    )
}
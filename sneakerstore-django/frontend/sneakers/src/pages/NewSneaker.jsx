import { useState } from "react"
import { Footer } from "../components/footer/footer"
import { Navbar } from "../components/navbar/navbar"
import axios from 'axios'

export const NewSneaker = () => {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [condition, setCondition] = useState("");
    const [releaser_year, setRelease_year] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    
    const PostNewSneaker = async  () => {
        await axios.post("http://localhost:8000/sneakers/", {
            name: name,
            brand: brand,
            condition: condition,
            releaser_year: releaser_year,
            price: price,
            image: image
        })
    }


    return(
        <>
        <Navbar/>
            <input placeholder="Sneaker Name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            type="text"/>

            <input placeholder="Brand"
            value={brand}
            onChange={(evt) => setBrand(evt.target.value)}
            type="text"/>

            <input placeholder="Condition"
            value={condition}
            onChange={(evt) => setCondition(evt.target.value)}
            type="text"/>

            <input placeholder="Release year"
            value={releaser_year}
            onChange={(evt) => setRelease_year(evt.target.value)}
            type="number"/>

            <input placeholder="Price"
            value={price}
            onChange={(evt) => setPrice(evt.target.value)}
            type="number"/>

            <input placeholder=""
            value={image}
            onChange={(evt) => setImage(evt.target.value)}
            type="file"/>
            
            <button onClick={PostNewSneaker}></button>

        <Footer/>
        </>
    )
}
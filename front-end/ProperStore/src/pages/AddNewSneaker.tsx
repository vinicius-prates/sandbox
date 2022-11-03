import { NavBar } from "../components/NavBar"
import axios from 'axios'
import { useEffect, useState } from 'react'
interface SneakerProps {

    name: string, 
    price: number,
    descripion: string,
    image: File | null, 
    size: number,
    brand: String,
    condition: number
}


export const AddNewSneaker = () => {

    const [sneakerSizes, setSneakerSizes] = useState<{id: number, sneaker_size: number}[]>([])
    const [ brands, setBrands] = useState<{id: number, name: string}[]>([])

    const urlSS = "http://localhost:8000/api/sneakers-sizes/"
    const urlBrand = "http://localhost:8000/api/brands/"
    useEffect(() => {
        axios.get(urlSS).then((res) => setSneakerSizes(res.data))
        axios.get(urlBrand).then((res) => setBrands(res.data))
    }, [])

    return(
        <>
        <NavBar/>

        <form className="flex flex-col">
            <h1>New Sneaker!</h1>
            <input placeholder="Ex: Yeezy" type="text"/>
            <input placeholder="R$" type="number"/>
            <textarea placeholder="Description"/>
            <select>{sneakerSizes.map((size) => {
                return(
                    <option value={size.sneaker_size} key={size.id}>
                        {size.sneaker_size}
                    </option>
                )
            })}</select>
            <select>{brands.map((brand) => {
                return(
                    <option value={brand.name} key={brand.id}>
                        {brand.name}
                    </option>
                )
            })}</select>
        </form>
        </>
    )
}
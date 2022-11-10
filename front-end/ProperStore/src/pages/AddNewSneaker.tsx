import { NavBar } from "../components/NavBar"
import axios from 'axios'
import { useEffect, useState } from 'react'

 interface SneakerProps {

    name: string, 
    price: number,
    description: string,
    image: File | null, 
    size: number,
    brand: number,
    condition: number
}


export const AddNewSneaker = () => {

    const [sneakerSizes, setSneakerSizes] = useState<{id: number, sneaker_size: number}[]>([])
    const [ brands, setBrands] = useState<{id: number, name: string}[]>([])
    const [ conditions, setConditions] = useState<{id: number, condition : number, itsnew: boolean}[]>([])
    const [newSneakerData, setNewSneakerData] = useState<SneakerProps>({
        name: "",
        price: 0,
        description: "",
        image: null, 
        size: 1,
        brand: 1,
        condition: 1

    });


    const urlSS = "http://localhost:8000/api/sneakers-sizes/"
    const urlBrand = "http://localhost:8000/api/brands/"
    const urlCondition = "http://localhost:8000/api/conditions/"
    const urlSneakers = "http://localhost:8000/api/sneakers/"
    useEffect(() => {
        axios.get(urlSS).then((res) => setSneakerSizes(res.data))
        axios.get(urlBrand).then((res) => setBrands(res.data))
        axios.get(urlCondition).then((res) => setConditions(res.data))
    }, [])

    const onInputChange = (evt: any) => {

        setNewSneakerData({...newSneakerData, [evt.target.name]: evt.target.value})
        console.log(newSneakerData.size)
    }

    const addSneaker = async (e:any) => {

        e.preventDefault()

        const fd = new FormData()
        fd.append("name", newSneakerData.name);
        fd.append("price", newSneakerData.price.toString());
        fd.append("description", newSneakerData.description);
        fd.append("image", newSneakerData.image!);
        fd.append("size", newSneakerData.size.toString());
        fd.append("brand", newSneakerData.brand.toString());
        fd.append("condition", newSneakerData.condition.toString());
        console.log(newSneakerData.size)

        const { data } =  await axios.post(urlSneakers, fd, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log(JSON.stringify(data))
    }   

    return(
        <>
        <NavBar/>

        <form onSubmit={addSneaker} className="flex flex-col text-center mx-auto w-[22rem] md:w-[40rem] gap-6 justify-center items-center mt-8 mb-20">
            <h1 className="font-bold text-2xl ">New Sneaker!</h1>
            <input placeholder="Ex: Yeezy" type="text" name="name" onChange={onInputChange} className="bg-gray-100 border-b-2 rounded-t-lg p-2 focus:outline-none w-64 md:w-[30rem]"/>
            <input placeholder="R$" type="number" name="price" onChange={onInputChange} className="bg-gray-100 border-b-2 rounded-t-lg p-2 focus:outline-none w-64 md:w-[30rem]"/>
            <textarea placeholder="Description" name="description" onChange={onInputChange} className="bg-gray-100 border-b-2 rounded-t-lg p-2 focus:outline-none resize-none h-24 w-64 md:w-[30rem]"/>
            <select  className="bg-gray-100 border-b-2 rounded-t-lg p-2 focus:outline-none w-64 md:w-[30rem] font-bold"
            name="size" onChange={onInputChange}
            >{sneakerSizes.map((size) => {
                return(
                    <option value={size.id} key={size.id}>
                        {size.sneaker_size}
                    </option>
                )
            })}</select>
            <select className="bg-gray-100 border-b-2 rounded-t-lg p-2 focus:outline-none w-64 md:w-[30rem] font-bold"
            name="brand" onChange={onInputChange}
            >{brands.map((brand) => {
                return(
                    <option value={brand.id} key={brand.id}>
                        {brand.name}
                    </option>
                )
            })}</select>
            <select className="bg-gray-100 border-b-2 rounded-t-lg p-2 focus:outline-none w-64 md:w-[30rem] font-bold"
            name="condition" onChange={onInputChange} 
            >{conditions.map((condition) => {
                return(
                <option value={condition.id} key={condition.id} >
                    {condition.condition}
                </option>)
            })}</select>
            <input type="file" name="image" onChange={(evt) => setNewSneakerData({
                ...newSneakerData, image: evt.target.files![0],
            })} />
            <button className="p-4 bg-blue-600 rounded-2xl text-lg md:w-[20rem] font-bold text-white hover:bg-black hover:text-blue-600 duration-500 transition-all" >Add New</button>
        </form>
        
        </>
    )
}
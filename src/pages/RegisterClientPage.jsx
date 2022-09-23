import '../App.css';
import { Link } from 'react-router-dom';
export const RegisterClientPage = () => {
return(
    <>
    <div className="flex justify-center align-middle w-full items-center h-[90vh]">

    <div className="flex flex-col text-center items-center gap-10  bg-gray-100 p-6 mx-6 p rounded-lg w-[42rem] lg:h-[24rem] shadow-xl shadow-gray-300">
    <h1 className="font-bold text-3xl ">Welcome to Exo! Now we need more info...</h1>
    <div className="flex lg:flex-row flex-col gap-8">
    <form className="flex flex-col gap-4" >
        <input placeholder="Your Name"type="text" className="p-1 border-b-2 focus:outline-none"></input>
        <input placeholder="example@gmail.com" type="email"  className="p-1 border-b-2 focus:outline-none"></input>
        <select placeholder="Sex"  className="p-1 border-b-2 focus:outline-none">
            <option>Male</option>
            <option>Female</option>
        </select>
        <input type="date"  className="p-1 border-b-2 focus:outline-none"></input>
        <input type="text" placeholder="Phone Number" className="p-1 border-b-2 focus:outline-none"></input>
        
        <button className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-52  text-center
        hover:bg-white hover:text-blue-600 ease-in-out duration-300 cursor-pointer">Register</button>
    </form>

    </div>
    
      
    

</div>
</div>
    </>
)

}
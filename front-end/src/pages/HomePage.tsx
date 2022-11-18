import { NavBar } from "../components/NavBar"

export const HomePage = () => {
    return(
        <div>
            <NavBar/>
            <div id="landingPage" className=" h-[100vh] bg-cover bg-center flex justify-center items-center content-center" >

                    <div className="text-[#faf9f6] text-4xl font-bold flex flex-col justify-center items-center mt-[-10rem] mx-10">
                        <h1 className="text-center">Exo, The bank of the future</h1>
                        <button className="bg-blue-600 text-[#faf9f6] rounded-xl text-2xl py-3 px-4">Start Using </button>
                    </div>
            </div>

        </div>
    )
}
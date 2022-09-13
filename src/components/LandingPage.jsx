import '../App.css';
export const LandingPage = () => {
    return(
        <>
        <div className="bg-cover bg-center  w-full h-[91.5vh]  bg-[url('./assets/navbar-image.jpg')]">
            <div className="flex flex-col w-full justify-center self-center pt-64">
                <h1 className="text-white font-bold text-2xl self-center text-center justify-center">Welcome to Exo!
                    New here? Create an account.
                </h1>
                <div className="my-8 flex gap-6 self-center">
                    <a className="bg-white text-black font-bold p-4 rounded-[20px] w-32 text-center
                    hover:bg-black hover:text-white ease-in-out duration-300"
                    href="" >Login</a>
                    <a className="bg-blue-600 text-white font-bold p-4 rounded-[20px] w-32 text-center
                    hover:bg-white hover:text-blue-600 ease-in-out duration-300"
                    href=""> Sign Up</a>
                </div>
                    
            </div>
        </div>
        </>
    )
}
import '../App.css';
export const LandingPage = () => {
    return(
        <>
        <div className="bg-cover bg-center  w-screen h-[91.5vh]  bg-[url('./assets/navbar-image.jpg')]">
            <div className="flex flex-col w-64 ">
                <h1 className="">Welcome to Exo!
                    New here? Create an account.
                </h1>
                <div className="my-8    ">
                    <a className="bg-white text-black font-bold p-4 rounded-[15px]" >Sign In</a>
                    <a className="bg-blue-600 text-white font-bold p-4 rounded-[15px]"> Log In </a>
                </div>
                    
            </div>
        </div>
        </>
    )
}
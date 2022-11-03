import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/proper.png"

export const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    return(
        <nav className="w-full  bg-[#161616] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between pb-8 pt-10 md:py-10 md:block">
                    <a href="javascript:void(0)">
                        <h2 className="text-2xl text-[#FAF9F6] focus:outline-none font-bold"><img src={logo} /></h2>
                    </a>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-[#FAF9F6] rounded-md outline-none focus:border-gray-400 focus:outline-none"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-[#FAF9F6] text-lg font-bold hover:text-gray-600 transition-all">
                            <Link to="/addnew-sneaker">Add new</Link>
                        </li>
                        <li className="text-[#FAF9F6] text-lg font-bold hover:text-gray-600 transition-all">
                            <a href="javascript:void(0)">All sneakers</a>
                        </li>
                        <li className="text-[#161616] bg-[#FAF9F6] px-4 py-2 rounded-lg text-lg font-bold hover:text-[#FAF9F6] hover:bg-[#323232] transition-all">
                            <a href="javascript:void(0)">Login</a>
                        </li>
                        <li className="text-[#FAF9F6] text-lg font-bold bg-blue-700 px-4 py-2 rounded-lg hover:text-blue-700 hover:bg-[#faf9f6]  transition-all">
                            <a href="javascript:void(0)">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);
}
    

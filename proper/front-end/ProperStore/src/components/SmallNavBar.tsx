import { Link } from "react-router-dom";
import logo from "../assets/proper.png"
import sneakers from "../assets/Sneakers.png"
export const SmallNavBar = () => {
    return(
        <div className="w-full  bg-[#161616] shadow">
            <div className="flex items-center justify-center py-6 md:py-10">
                    <Link to="/">
                       <img src={sneakers} className="w-40" />
                        </Link>
                        </div>
        </div>
    )
}
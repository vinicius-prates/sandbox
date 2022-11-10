import { Link } from "react-router-dom"
import adidasLogo from "../assets/adidas.png"
import nikeLogo from "../assets/nike.png"
import newBalanceLogo from "../assets/newbalance.png"
import vansLogo from "../assets/vans.png"
import yeezyLogo from "../assets/yeezy.png"
export const PopularBrands = () => {
    return(
        <div className="flex flex-row items-center justify-center gap-8 my-20">
            <Link to="" className="border-2 border-gray-400 hover:border-gray-200 hover:border-4 rounded-lg transition-all"><img src={adidasLogo} className="w-[10rem] px-10" /> </Link>
            <Link to=""  className="border-2 border-gray-400 hover:border-gray-200 hover:border-4 rounded-lg transition-all"><img src={nikeLogo} className="w-[10rem] px-10 " /></Link>
            <Link to=" "  className="border-2 border-gray-400 hover:border-gray-200 hover:border-4 rounded-lg  transition-all"><img src={newBalanceLogo}  className="w-[10rem] py-[1.15rem] px-10 "/></Link>
            <Link to="" className="border-2 border-gray-400 hover:border-gray-200 hover:border-4 rounded-lg  transition-all"><img src={vansLogo}  className="w-[11rem] py-5 px-10 "/></Link>
            <Link to="" className="border-2 border-gray-400 hover:border-gray-200 hover:border-4  rounded-lg transition-all"    ><img src={yeezyLogo} className="w-[12rem] py-[1.4rem] px-10 "/></Link>
        </div>
    )
}
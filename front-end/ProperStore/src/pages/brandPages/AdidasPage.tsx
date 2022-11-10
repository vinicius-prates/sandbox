import { Link } from "react-router-dom"
import adidasLogo from "../../assets/adidas.png"
export const AdidasPage = () => {
    return(
        <div>
            <div className="bg-[#FAF9F6] flex justify-center ">
                <Link to="/"><img src={adidasLogo} className="w-20"></img></Link>
            </div>
            <div>

            </div>
        </div>
    )
}
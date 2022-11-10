import { Link } from "react-router-dom"
import nikeLogo from "../../assets/nike.png"
export const NikePage = () => {
    return(
        <div>
            <div className="bg-[#FAF9F6] flex justify-center ">
                <Link to="/"><img src={nikeLogo} className="w-20"></img></Link>
            </div>
            <div>

            </div>
        </div>
    )
}
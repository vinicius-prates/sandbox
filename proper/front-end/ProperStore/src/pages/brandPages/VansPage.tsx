import { Link } from "react-router-dom"
import vansLogo from "../../assets/vans.png"
export const VansPage = () => {
    return(
        <div>
            <div className="bg-[#FAF9F6] flex justify-center py-4">
                <Link to="/"><img src={vansLogo} className="w-20"></img></Link>
            </div>
            <div>

            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import nblogo from "../../assets/newbalance.png"
export const NewBalancePage = () => {
    return(
        <div>
            <div className="bg-[#FAF9F6] flex justify-center py-4">
                <Link to="/"><img src={nblogo} className="w-20"></img></Link>
            </div>
            <div>

            </div>
        </div>
    )
}
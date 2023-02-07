import { Link } from "react-router-dom"
import yeezyLogo from "../../assets/yeezy.png"
export const YeezyPage = () => {
    return(
        <div>
            <div className="bg-[#FAF9F6] flex justify-center py-4">
                <Link to="/"><img src={yeezyLogo} className="w-24"></img></Link>
            </div>
        </div>
    )
}
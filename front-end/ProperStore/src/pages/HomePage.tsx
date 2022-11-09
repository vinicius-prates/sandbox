import { NavBar } from "../components/NavBar"
import { PopularBrands } from "../components/PopularBrands"
import { SlideShow } from "../components/SlideShow"

export const HomePage = () => {
    return(
        <div>
            <NavBar/>
            <SlideShow/>
            <PopularBrands/>
        </div>
    )
}
import { Route, Routes } from "react-router-dom"
import { AddNewSneaker } from "./pages/AddNewSneaker"
import { AllSneakers } from "./pages/AllSneakers"
import { HomePage } from "./pages/HomePage"
import { YeezyPage } from "./pages/brandPages/YeezyPage"
import { VansPage } from "./pages/brandPages/VansPage"
import { NikePage } from "./pages/brandPages/NikePage"
import { AdidasPage } from "./pages/brandPages/AdidasPage"
import { NewBalancePage } from "./pages/brandPages/NewBalancePage"


export const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/addnew-sneaker" element={<AddNewSneaker/>}/>
            <Route path="/all-sneakers" element={<AllSneakers/>}/>
            <Route path="/yeezy" element={<YeezyPage/>}/>
            <Route path="/vans" element={<VansPage/>}/>
            <Route path="/nike" element={<NikePage/>}/>
            <Route path="/adidas" element={<AdidasPage/>}/>
            <Route path="/new-balance" element={<NewBalancePage/>}/>
        </Routes>       
    )
}
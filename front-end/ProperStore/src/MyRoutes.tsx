import { Route, Routes } from "react-router-dom"
import { AddNewSneaker } from "./pages/AddNewSneaker"
import { HomePage } from "./pages/HomePage"


export const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/addnew-sneaker" element={<AddNewSneaker/>}/>
        </Routes>       
    )
}
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { Register } from "./pages/Register"

export const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
            
        </Routes>
    )
}
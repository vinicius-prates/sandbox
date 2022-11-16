import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

export const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { UserPage } from "./pages/UserPage"

export const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/:id/home" element={<UserPage/>}/>
        </Routes>
    )
}
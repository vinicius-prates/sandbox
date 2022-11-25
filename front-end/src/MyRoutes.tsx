import { Route, Routes } from "react-router-dom"
import { Deposit } from "./pages/Deposit"
import { HomePage } from "./pages/HomePage"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Transfer } from "./pages/Transfer"
import { UserInfo } from "./pages/UserInfo"
import { UserPage } from "./pages/UserPage"

export const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<UserPage/>}/>
            <Route path="/home/user-info" element={<UserInfo/>}/>
            <Route path="/home/transfer" element={<Transfer/>}/>
            <Route path="/home/deposit" element={<Deposit/>}/>
        </Routes>
    )
}
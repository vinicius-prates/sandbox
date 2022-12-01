import { Route, Routes } from "react-router-dom"
import { CardPage } from "./pages/CardPage"
import { Deposit } from "./pages/Deposit"
import { Draw } from "./pages/Draw"
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
            <Route path="/cards" element={<CardPage/>}/>
            <Route path="/home" element={<UserPage/>}/>
            <Route path="/home/user-info" element={<UserInfo/>}/>
            <Route path="/home/transfer" element={<Transfer/>}/>
            <Route path="/home/deposit" element={<Deposit/>}/>
            <Route path="/home/draw" element={<Draw/>}/>
        </Routes>
    )
}
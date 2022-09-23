import { Route, Routes } from "react-router-dom"
import App from "./App"
import { CardsPage } from "./pages/CardsPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterClientPage } from "./pages/RegisterClientPage"
import { RegisterPage } from "./pages/RegisterPage"
 
export const MyRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
            <Route path="cards" element={<CardsPage/>}/>
            <Route path="register/client" element={<RegisterClientPage/>}/>


        </Routes>
    )
}
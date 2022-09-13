import { Route, Routes } from "react-router-dom"
import App from "./App"
import { LoginPage } from "./pages/LoginPage"
 
export const MyRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="login" element={<LoginPage/>}/>
            


        </Routes>
    )
}
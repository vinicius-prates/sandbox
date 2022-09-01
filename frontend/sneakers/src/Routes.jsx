import { Route, Routes } from "react-router-dom"
import { NewSneaker } from "./pages/NewSneaker" 
import App from "./App"

export const MyRoutes = () => {

    return(
        <Routes>
            <Route path="/" element= { <App/> }/>
            <Route path="addsneaker" element= { <NewSneaker/> } />
        </Routes>
    )

}
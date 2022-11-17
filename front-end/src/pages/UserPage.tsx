import { Notify } from "notiflix";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useUserStore } from "../userStore"


export const UserPage = () => {
    const cpf = useUserStore(state => state.cpf)
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        
        if (!cpf){
            Notify.failure("You cant log in other user account!")
            navigate("/login")
            return
        }
    },[])
    
    return(
        <div>
            <h1>{cpf}</h1>
        </div>
    )
    }
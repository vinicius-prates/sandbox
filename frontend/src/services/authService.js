import axios from "axios";

export class AuthService{

    static async tryLogin(edv, password){
        await axios.get(`/api/login/${edv}/${password}`)
        .then(res => res.json().then(data => {
            return data
        }))

    }
}
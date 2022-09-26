export const createSession = (data) => {

    
    localStorage.setItem("session",JSON.stringify(data))

}

export const getSession = () => {
    let session
    try{
         session = JSON.parse( localStorage.getItem("session"))    
    }
    catch{
        session = undefined
    }
    return session

}

export const logoutSession = () => {

    localStorage.clear();

}
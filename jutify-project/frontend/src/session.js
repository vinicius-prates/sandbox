

export const getSession = () => {
    let sessionObject;
    try {
        sessionObject = JSON.parse(localStorage.getItem('session'))
    }
    catch {
        sessionObject = undefined;
    }
    return sessionObject;
}


export const endSession = () => {
    localStorage.removeItem('session');
}

export const createSession = (colaboradorData) => {
    localStorage.setItem('session', JSON.stringify(colaboradorData));
}
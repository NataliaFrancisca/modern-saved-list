type User = {
    displayName: string | null;
    email: string | null;
    uid: string;
}

function saveUserSession(user: User){
    sessionStorage.setItem('user-session', JSON.stringify(user));
}

function getUserSession(){
    const valor = sessionStorage.getItem('user-session');
    return JSON.parse(valor as string);
}

export { saveUserSession, getUserSession };
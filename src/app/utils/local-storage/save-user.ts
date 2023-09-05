import { User } from "@/app/types/types";

function saveUserSession(user: User){
    const {displayName, email, uid} = user;
    sessionStorage.setItem('user-session', JSON.stringify({displayName, email, uid}));
}

function getUserSession(){
    const valor = sessionStorage.getItem('user-session');
    return JSON.parse(valor as string);
}

export { saveUserSession, getUserSession };
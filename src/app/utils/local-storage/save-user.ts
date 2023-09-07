import { User } from "@/app/types/types";
import { UserCredential } from "firebase/auth";
import { setCookie, parseCookies } from "nookies";


function setUserCookie(userCredential: UserCredential){
    const user = userCredential.user;

    const userJSON = {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
    }

    setCookie(null, 'USER_DATA', JSON.stringify(userJSON), {
        maxAge: 86400 * 7,
        path: '/',
    });
}

function getUserCookie(){
    const {USER_DATA} = parseCookies();

    if (USER_DATA) {
        const result = JSON.parse(USER_DATA);
        return result;
    } else {
        console.log('Cookie not found.');
        return false;
    }
}

export { setUserCookie, getUserCookie };
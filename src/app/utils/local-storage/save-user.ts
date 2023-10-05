import { User } from "firebase/auth";
import { setCookie, parseCookies, destroyCookie  } from "nookies";

function setUserCookie(user: User){
    const userJSON = {
        displayName: user.displayName,
        email: user.email,
        photo: user.photoURL
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
        console.log(result)
        return result;
    } else {
        console.log('Cookie not found.');
        return false;
    }
}

function deleteCookie(){
    destroyCookie(null, 'USER_DATA');
}

export { setUserCookie, getUserCookie, deleteCookie };
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence, getAuth} from "firebase/auth";
import { auth } from '../config';
import { saveUserSession } from "@/app/utils/local-storage/save-user";
const provider = new GoogleAuthProvider();

export const singInPersistence = async() => {
    return setPersistence(auth, browserLocalPersistence)
        .then(() => {
            return 'saved login'
        })
        .catch((error) => {
            return error.message
        })
}

export async function signIn(email: string, password: string){
    return signInWithEmailAndPassword(auth, email, password).then((userCredencial) => {
        singInPersistence();
        const {displayName, email, uid} = userCredencial.user;
        saveUserSession({displayName, email, uid});
        return {
            message: 'login with sucess',
            data: userCredencial
        };
    }).catch((error) => {
        return {
            message: error.message
        }
    })
}

export async function signInWithGoogle(){
    return signInWithPopup(auth, provider).then((userCredencial) => {
        console.log(userCredencial);
        return 'account created with sucess'
    }).catch((error) => {
        return error;
    })
}


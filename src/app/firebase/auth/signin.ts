import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence, getAuth} from "firebase/auth";
import { auth } from '../config';
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


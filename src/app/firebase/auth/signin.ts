import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import auth from "../config";

const provider = new GoogleAuthProvider();

export async function signIn(email: string, password: string){
    return signInWithEmailAndPassword(auth, email, password).then((userCredencial) => {
        return 'login with sucess';
    }).catch((error) => {
        return error.message;
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

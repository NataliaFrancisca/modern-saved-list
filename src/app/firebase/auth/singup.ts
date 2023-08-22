import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { auth } from '../config';

const provider = new GoogleAuthProvider();

export async function signUp(name: string, email: string, password: string){
    return createUserWithEmailAndPassword(auth, email, password).then((userCredencial) => {
        updateProfile(userCredencial.user, {
            displayName: name
        })
        return 'account created with sucess'
    }).catch((error) => {
        return error.message;
    })
}

export async function signUpWithGoogle(){
    return signInWithPopup(auth, provider).then((userCredencial) => {
        console.log(userCredencial);
        return 'account created with sucess'
    }).catch((error) => {
        return error;
    })
}


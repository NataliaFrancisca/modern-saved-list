import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence, getAuth, UserCredential, AuthError} from "firebase/auth";
import { auth } from '../config';
const provider = new GoogleAuthProvider();

export async function singInPersistence(){
    try{
        await setPersistence(auth, browserLocalPersistence);
        return 'set persistence sucess';
    }catch(error: any){
        return error.message;
    }
}

export async function signIn(email: string, password: string){
    try{
        const response = await signInWithEmailAndPassword(auth, email, password); 
        singInPersistence();
        return{
            message: 'login with sucess',
            data: response
        }
    }catch(error: any){
        return {
            message: error.message
        }
    }
}

export async function signInWithGoogle(){
    try{
        const response = await signInWithPopup(auth, provider);
        singInPersistence();
        return{
            message: 'login with sucess',
            data: response
        }
    }catch(error: any){
        return {
            message: error.message}
    }
}


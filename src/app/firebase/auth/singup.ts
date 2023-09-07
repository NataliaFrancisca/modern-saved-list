import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { auth } from '../config';

const provider = new GoogleAuthProvider();

type UserRegister = {
    displayName: string,
    email: string,
    password: string
}

export async function signUp(user: UserRegister){
    try{
        const response = await createUserWithEmailAndPassword(auth, user.email, user.password);
        const userResponse = response.user;

        updateProfile(userResponse, {
            displayName: user.displayName
        });

        return {
            message: 'account created with sucess',
            data: response
        };

    }catch(error: any){
        return{
            message: error.message
        }
    }
}

export async function signUpWithGoogle(){
    try{
        const response = await signInWithPopup(auth, provider);
        return {
            message: 'account created with sucess',
            data: response
        }
    }catch(error: any){
        return{
            message: error.message
        }
    }
}
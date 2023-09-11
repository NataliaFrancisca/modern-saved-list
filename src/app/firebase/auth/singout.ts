import { signOut } from "firebase/auth";
import { auth } from "../config";


export async function signOutUser(){
    try{
        const result = await signOut(auth);
        console.log(result);
        return {
            message: 'singout with sucess',
            data: result
        }
    }catch(error: any){
        return {
            message: error.message
        }
    }
}
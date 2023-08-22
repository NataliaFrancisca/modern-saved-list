import { auth, db } from "../config";
import { getDoc, doc } from "firebase/firestore";

const getUserData = async() => {
    const user = auth.currentUser;

    if(user){
        const docRef = doc(db, "users", user.uid);
        return getDoc(docRef).then((result) => {
            console.log("Sucess getting data");
            return result.data();
        }).catch((error) => {
            return error;
        })
    }
}

export async function getResource(){
    return getUserData().then((result) => {
        return result;
    }).catch((error) => {
        return error;
    })
}
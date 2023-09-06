import { db } from "../config";
import { getDoc, doc } from "firebase/firestore";
import { getUserCookie } from "@/app/utils/local-storage/save-user";

export const getResource = async() => {
    const user = getUserCookie();
    const docRef = doc(db, 'users', user.uid);

    return await getDoc(docRef).then((result) => {
        return result.data();
    }).catch((error) => {
        return error;
    })
};
import { db } from "../config";
import { getDoc, doc } from "firebase/firestore";
import { getUserSession } from "@/app/utils/local-storage/save.user";

export const getResource = async() => {
    const user = getUserSession();
    const docRef = doc(db, 'users', user.uid);

    return await getDoc(docRef).then((result) => {
        return result.data();
    }).catch((error) => {
        return error;
    })
};
import { FormContent } from "@/app/types/types";

function saveContentSession(data: FormContent){
    sessionStorage.setItem('user-content', JSON.stringify(data));
}

function getContentSession(){
    const value = sessionStorage.getItem('user-content');
    return JSON.parse(value as string);
}

export { saveContentSession, getContentSession };
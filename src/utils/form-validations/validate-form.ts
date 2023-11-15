import { TLoginForm, TRegisterForm } from "@/ts/types";
import { validateEmail, validatePassword, validateName } from "./validate-inputs";

function validateFormLogin(login: TLoginForm, firebase?: string){

  const objError = {
    email: validateEmail(login.email, firebase),
    password: validatePassword(login.password, firebase),
  }

  const hasError = Object.values(objError).some((value) => value);

  return { hasError, objError };
}

function validateFormRegister(register: TRegisterForm, firebase?: string){

  const objError = {
    name: validateName(register.name),
    email: validateEmail(register.email, firebase),
    password: validatePassword(register.password, firebase)
  }

  const hasError = Object.values(objError).some((value) => value);
  
  return { hasError, objError }
}


export { validateFormLogin, validateFormRegister }
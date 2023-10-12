import { TLoginForm } from "@/ts/types";
import { validateEmail, validatePassword } from "./validations-form";

function validateFormLogin(login: TLoginForm, firebase?: string){

  const objError = {
    email: validateEmail(login.email, firebase),
    password: validatePassword(login.password, firebase),
  }

  const hasError = Object.values(objError).some((value) => value);

  return { hasError, objError };
}


export { validateFormLogin }
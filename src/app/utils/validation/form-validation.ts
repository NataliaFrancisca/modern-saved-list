import { InputFormLogin, InputFormRegister } from "@/app/types/types";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function validateRegisterForm(register: InputFormRegister, firebase?: string){
    const executeValidationName = validateName(register.name);
    const executeValidationEmail = validateEmail(register.email, firebase);
    const executeValidationPassword = validatePassword(register.password, firebase);
    
    const errors = {
        name: executeValidationName,
        email:executeValidationEmail,
        password: executeValidationPassword
    }

    const objErrors = Object.values(errors);
    const hasErrors = objErrors.some(value => value);

    return { hasErrors, errors }
}

export function validateLoginForm(login: InputFormLogin, firebase?:string){
  const executeValidationEmail = validateEmail(login.email, firebase);
  const executeValidationPassword = validatePassword(login.password, firebase);

  const errors = {
    email:executeValidationEmail,
    password: executeValidationPassword
  }

  const objErrors = Object.values(errors);
  const hasErrors = objErrors.some(value => value);

  return { hasErrors, errors }

}

function validateName(name:string){
    if(name == ''){
        return 'Campo vazio, digite seu nome';
    }

    if(name.length < 3){
        return 'Seu nome deve conter mais de 3 caracteres';
    }

    return false;
}

function validateEmail(email:string, fireBaseError: string|undefined) {
    if (email == '') {
      return 'Campo vazio, digite seu e-mail';
    }

    if (!email.match(emailRegex)) {
      return 'Digite um e-mail valido!';
    }

    if (fireBaseError?.includes('auth/user-not-found)')) {
      return 'E-mail digitado não foi encontrado';
    }

    if(fireBaseError?.includes('email-already-in-use')){
      return "E-mail digitado já está sendo utilizado";
    }
    
    return false;
}

function validatePassword(password: string, fireBaseError: string|undefined) {
    if (password == '') {
      return 'Campo vazio, digite sua senha';
    }

    if (password.length < 6) {
      return 'Sua senha deve ter mais de 6 caracteres';
    }

    if (fireBaseError?.includes('(auth/wrong-password)')) {
      return 'A senha digita está errada';
    }

    return false;
}


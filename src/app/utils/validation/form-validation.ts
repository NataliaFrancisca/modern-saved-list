import { FormLogin, FormRegister, FormContent, ErrorFormContent } from "@/app/types/types";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;

export function validateRegisterForm(register: FormRegister, firebase?: string){
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

export function validateLoginForm(login: FormLogin, firebase?:string){
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
export function validateSaveContent(content: FormContent){
  const executeValidationTitle = validateTitle(content.title);
  const executeValidationURL = validateURL(content.link);
  const executeValidateType = validateType(content.type);

  let errors: ErrorFormContent = {
    title: executeValidationTitle,
    link: executeValidationURL,
    type: executeValidateType,
    image: false
  }

  if(content.image){
    const executeValidationImage = validateURL(content.image);
    errors.image = executeValidationImage;
  }

  const objErrors = Object.values(errors);
  const hasErrors = objErrors.some(value => value);


  return { hasErrors, errors }
}


function validateTitle(title:string){
    if(title == ''){
      return 'Campo vazio, digite seu nome';
    }

    if(title.length < 3){
        return 'O título deve conter mais de 3 caracteres';
    }
    return false;
}

function validateURL(url:string){
  if(url == ''){
    return 'Campo vazio, digite seu nome';
  }

  if (!url.match(urlRegex)) {
    return 'Digite uma URL válida!';
  }

  return false;
}

function validateType(type: string){
  if(type == ''){
    return 'Campo vazio, digite seu nome';
  }

  return false;
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

export function validateName2(name:string){
  let error;
  
  if(name == ''){
      error = 'Campo vazio, digite seu nome';
  }

  if(name.length < 3){
      error = 'Seu nome deve conter mais de 3 caracteres';
  }

  if(error){
    return error;
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


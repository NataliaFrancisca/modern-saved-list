const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function validateName(name: string) {
  if (name == '') {
    return 'Campo vazio, digite seu nome';
  }
  
  if (name.length < 3) {
    return 'Seu nome deve conter mais de 3 caracteres';
  }
  
  return false;
}

function validateEmail(email: string, fireBaseError: string | undefined) {
  if (email == '') {
    return 'Campo vazio, digite seu e-mail';
  }
  
  if (!email.match(emailRegex)) {
    return 'Digite um e-mail valido!';
  }
  
  if (fireBaseError?.includes('auth/user-not-found)')) {
    return 'E-mail digitado não foi encontrado';
  }
  
  if (fireBaseError?.includes('email-already-in-use')) {
    return 'E-mail digitado já está sendo utilizado';
  }
  
  return false;
}

function validatePassword(password: string, fireBaseError: string | undefined) {
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

export {validateEmail, validateName, validatePassword}
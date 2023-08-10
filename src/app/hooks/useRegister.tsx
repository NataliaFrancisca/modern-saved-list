import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateRegisterForm } from '../utils/validation/form-validation';
import { signUp, signUpWithGoogle } from '../firebase/auth/singup';
import { InputFormRegister, InputError } from '../types/types';

export const useRegister = (inputData: InputFormRegister) => {
  const [error, setError] = useState<InputError>();
  const { name, email, password } = inputData;

  const router = useRouter();

  const submitWithEmailPassword = async () => {
    event?.preventDefault();

    const resultFromValidation = validateRegisterForm(inputData);
    setError(resultFromValidation.errors);

    if (resultFromValidation.hasErrors == false) {
      const firebaseRegister = await signUp(name, email, password);

      if (firebaseRegister.includes('Error')) {
        const resultFromValidation = validateRegisterForm(
          inputData,
          firebaseRegister
        );
        setError(resultFromValidation.errors);
      } else {
        router.push('/dashboard');
      }
    }
  };

  const submitWithGoogle = async () => {
    event?.preventDefault();
    const result = await signUpWithGoogle();
    console.log(result);
  };

  return { error, submitWithEmailPassword, submitWithGoogle };
};

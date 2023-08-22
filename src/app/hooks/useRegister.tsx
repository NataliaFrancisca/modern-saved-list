import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateRegisterForm } from '../utils/validation/form-validation';
import { signUp, signUpWithGoogle } from '../firebase/auth/singup';
import { FormRegister, ErrorFormRegister } from '../types/types';
import { initializeDB } from '../firebase/database/initialize-db';

export const useRegister = (inputData: FormRegister) => {
  const [error, setError] = useState<ErrorFormRegister>();
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
        await initializeDB();
        router.push('/dashboard');
      }
    }
  };

  const submitWithGoogle = async () => {
    event?.preventDefault();
    const result = await signUpWithGoogle();
    await initializeDB();
    console.log(result);
  };

  return { error, submitWithEmailPassword, submitWithGoogle };
};

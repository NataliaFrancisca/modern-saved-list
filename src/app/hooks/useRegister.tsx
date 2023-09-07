import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateRegisterForm } from '../utils/validation/form-validation';
import { signUp, signUpWithGoogle } from '../firebase/auth/singup';
import { FormRegister, ErrorFormRegister } from '../types/types';
import { initializeDB } from '../firebase/database/initialize-db';
import { setUserCookie } from '../utils/local-storage/save-user';

export const useRegister = (inputData: FormRegister) => {
  const [error, setError] = useState<ErrorFormRegister>();
  const { name, email, password } = inputData;

  const router = useRouter();

  const submitWithEmailPassword = async () => {
    event?.preventDefault();

    const resultFromValidation = validateRegisterForm(inputData);
    setError(resultFromValidation.errors);

    if (resultFromValidation.hasErrors == false) {
      const firebaseRegister = await signUp({
        displayName: name,
        email,
        password
      });

      if (firebaseRegister.data) {
        await initializeDB();
        setUserCookie(firebaseRegister.data);
        router.push('/dashboard');
      }

      if (firebaseRegister.message.includes('Error')) {
        const firebaseValidation = validateRegisterForm(
          inputData,
          firebaseRegister.message
        );
        setError(firebaseValidation.errors);
        return;
      }
    }
  };

  const submitWithGoogle = async () => {
    event?.preventDefault();
    const firebaseRegister = await signUpWithGoogle();

    if (firebaseRegister.data) {
      await initializeDB();
      setUserCookie(firebaseRegister.data);
      router.push('/dashboard');
    }

    if (firebaseRegister.message.includes('Error')) {
      setError({
        name: false,
        email: false,
        password: false,
        google: 'Something wrong with Google Register, try again'
      });
    }
  };

  return { error, submitWithEmailPassword, submitWithGoogle };
};

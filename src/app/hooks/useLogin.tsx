import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validateLoginForm } from '../utils/validation/form-validation';
import { signIn, signInWithGoogle } from '../firebase/auth/signin';
import { FormLogin, ErrorFormLogin } from '../types/types';

export const useLogin = (inputData: FormLogin) => {
  const [error, setError] = useState<ErrorFormLogin>();
  const { email, password } = inputData;

  const router = useRouter();

  const submitWithEmailPassword = async () => {
    event?.preventDefault();
    const resultFromValidation = validateLoginForm(inputData);
    setError(resultFromValidation.errors);

    if (resultFromValidation.hasErrors == false) {
      const firebaseLogin = await signIn(email, password);

      if (firebaseLogin.message.includes('Error')) {
        const resultFromValidation = validateLoginForm(
          inputData,
          firebaseLogin.message
        );
        setError(resultFromValidation.errors);
      } else {
        router.push('/dashboard');
      }
    }
  };

  const submitWithGoogle = async () => {
    event?.preventDefault();
    const result = await signInWithGoogle();
    if (result) {
      router.push('/dashboard');
    }
  };

  return { error, submitWithEmailPassword, submitWithGoogle };
};

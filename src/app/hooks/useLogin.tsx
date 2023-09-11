import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validateLoginForm } from '../utils/validation/form-validation';
import { signIn, signInWithGoogle } from '../firebase/auth/signin';
import { FormLogin, ErrorFormLogin } from '../types/types';
import { setUserCookie } from '../utils/local-storage/save-user';

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

      if (firebaseLogin.data) {
        setUserCookie(firebaseLogin.data.user);
        router.push('/dashboard');
        return;
      }

      if (firebaseLogin.message.includes('Error')) {
        const firebaseValidation = validateLoginForm(
          inputData,
          firebaseLogin.message
        );
        setError(firebaseValidation.errors);
        return;
      }
    }
  };

  const submitWithGoogle = async () => {
    event?.preventDefault();
    const firebaseLogin = await signInWithGoogle();
    console.log('firebaseLogin', firebaseLogin);

    if (firebaseLogin.data) {
      setUserCookie(firebaseLogin.data.user);
      router.push('/dashboard');
      return;
    }

    if (firebaseLogin.message.includes('Error')) {
      setError({
        email: false,
        password: false,
        google: 'Something wrong with Google Login, try again'
      });
      return;
    }
  };

  return { error, submitWithEmailPassword, submitWithGoogle };
};

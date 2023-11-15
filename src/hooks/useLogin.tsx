import { signIn, signInWithGoogle } from '@/firebase/auth/signin';
import { TErrorLoginForm, TLoginForm } from '@/ts/types';
import { validateFormLogin } from '@/utils/form-validations/validate-form';
import { setUserCookie } from '@/utils/nookies/save-user';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const UseLogin = (loginForm: TLoginForm) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<TErrorLoginForm>();
  const router = useRouter();

  const onSubmit = async () => {
    event?.preventDefault();
    setLoading(true);
    const validateResult = validateFormLogin(loginForm);
    setError(validateResult.objError);

    if (!validateResult.hasError) {
      const firebaseLogin = await signIn(loginForm.email, loginForm.password);

      if (firebaseLogin.data) {
        setUserCookie(firebaseLogin.data.user);
        router.push('/dashboard');
        return;
      }

      if (firebaseLogin.message.includes('Error')) {
        const validateResult = validateFormLogin(
          loginForm,
          firebaseLogin.message
        );
        setError(validateResult.objError);
        return;
      }
    }

    setLoading(false);
  };

  const onSubmitWithGoogle = async () => {
    setLoading(true);
    event?.preventDefault();
    const firebaseLogin = await signInWithGoogle();

    if (firebaseLogin.data) {
      setUserCookie(firebaseLogin.data.user);
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

    setLoading(false);
  };

  return { error, loading, onSubmit, onSubmitWithGoogle };
};

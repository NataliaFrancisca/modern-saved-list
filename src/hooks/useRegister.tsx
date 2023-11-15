import { signUp, signUpWithGoogle } from '@/firebase/auth/singup';
import { TErrorRegisterForm, TRegisterForm } from '@/ts/types';
import { validateFormRegister } from '@/utils/form-validations/validate-form';
import { setUserCookie } from '@/utils/nookies/save-user';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const UseRegister = (registerForm: TRegisterForm) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<TErrorRegisterForm>();
  const router = useRouter();

  const onSubmit = async () => {
    event?.preventDefault();
    setLoading(true);
    const validationResult = validateFormRegister(registerForm);
    setError(validationResult.objError);

    if (!validationResult.hasError) {
      const firebaseRegister = await signUp(registerForm);

      if (firebaseRegister.data) {
        setUserCookie(firebaseRegister.data.user);
        router.push('/dashboard');
        return;
      }

      if (firebaseRegister.message.includes('Error')) {
        const validateResult = validateFormRegister(
          registerForm,
          firebaseRegister.message
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
    const firebaseRegister = await signUpWithGoogle();

    if (firebaseRegister.data) {
      setUserCookie(firebaseRegister.data.user);
      return;
    }

    if (firebaseRegister.message.includes('Error')) {
      setError({
        name: false,
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

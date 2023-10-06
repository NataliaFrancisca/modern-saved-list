import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validateName2 } from '../utils/validation/form-validation';
import { updateUserName, updateUserPhoto } from '../firebase/auth/update';
import { setUserCookie } from '../utils/local-storage/save-user';

export const useUpdateUserName = (name: string) => {
  const [error, setError] = useState<string | boolean>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submitUpdateUserName = async () => {
    event?.preventDefault();
    const resultFromValidation = validateName2(name);
    setError(resultFromValidation);
    setLoading(true);

    if (resultFromValidation == false) {
      const result = await updateUserName(name);

      if (result.data) {
        setUserCookie(result.data);
        setLoading(!loading);
        router.back();
      }
    }
  };

  return { loading, error, submitUpdateUserName };
};

export const useUpdateUserPhoto = (photo: string) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitUpdateUserPhoto = async () => {
    event?.preventDefault();
    setLoading(true);

    const result = await updateUserPhoto(photo);

    if (result.data) {
      setUserCookie(result.data);
      setLoading(!loading);
      router.back();
    }
  };

  return { loading, submitUpdateUserPhoto };
};

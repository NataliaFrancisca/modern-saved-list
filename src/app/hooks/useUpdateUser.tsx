import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validateName2 } from '../utils/validation/form-validation';
import { updateUserName, updateUserPhoto } from '../firebase/auth/update';

export const useUpdateUserName = (name: string) => {
  const [error, setError] = useState<string | boolean>();

  const router = useRouter();

  const submitUpdateUserName = async () => {
    event?.preventDefault();
    const resultFromValidation = validateName2(name);
    setError(resultFromValidation);

    if (resultFromValidation == false) {
      const result = await updateUserName(name);

      if (result.data) {
        router.back();
      }
    }

    console.log(resultFromValidation);
  };

  return { error, submitUpdateUserName };
};

export const useUpdateUserPhoto = (photo: string) => {
  const [error, setError] = useState<string | boolean>();
  const router = useRouter();

  const submitUpdateUserPhoto = async () => {
    event?.preventDefault();
    console.log('DAMN SHITTTT');

    const result = await updateUserPhoto(photo);
    console.log(result);
    if (result.data) {
      router.back();
    }
  };

  return { error, submitUpdateUserPhoto };
};

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateSaveContent } from '@/app/utils/validation/form-validation';
import { FormContent, ErrorFormContent } from '@/app/types/types';
import { save } from '../firebase/database/save';

export const useSave = (formData: FormContent) => {
  const [error, setError] = useState<ErrorFormContent>();
  const router = useRouter();

  const saveContent = async () => {
    event?.preventDefault();

    const resultFromValidation = validateSaveContent(formData);
    setError(resultFromValidation.errors);

    if (resultFromValidation.hasErrors == false) {
      const result = await save(formData);
      router.back();
      console.log(result);
    }
  };

  return { error, saveContent };
};

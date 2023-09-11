'use client';
import AppTitle from '@/app/components/app-title';
import ButtonDefault from '@/app/components/button-default';
import { useUpdatePhoto, useUpdateUser } from '@/app/hooks/useUpdateUser';
import { user_photos_options } from '@/app/utils/user-profile-photo/photos';
import { useState } from 'react';

type Photo = {
  id: number;
  src: string;
};

const UpdatePhoto = () => {
  const [updatedPhoto, setUpdatedPhoto] = useState<Photo>(
    user_photos_options[0]
  );
  const { error, submitUpdateUserPhoto } = useUpdatePhoto(updatedPhoto.src);

  console.log(updatedPhoto);
  return (
    <section className="base-page">
      <AppTitle />

      <form className="form-element" onSubmit={() => submitUpdateUserPhoto()}>
        <legend className="page-legend">UPDATE PHOTO.</legend>
        <div className="grid-photos">
          {user_photos_options.map((photo: Photo) => (
            <img
              src={photo.src}
              key={photo.id}
              onClick={() => setUpdatedPhoto(photo)}
            />
          ))}
        </div>

        <ButtonDefault btnName="UPDATE" />
      </form>
    </section>
  );
};

export default UpdatePhoto;

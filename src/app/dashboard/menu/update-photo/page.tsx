'use client';
import AppTitle from '@/app/components/app-title';
import ButtonDefault from '@/app/components/button-default';
import Loader from '@/app/components/loader';
import { useUpdateUserPhoto } from '@/app/hooks/useUpdateUser';
import { getUserCookie } from '@/app/utils/local-storage/save-user';
import { user_photos_options } from '@/app/utils/user-profile-photo/photos';
import { useState } from 'react';

type Photo = {
  id: number;
  src: string;
};

const UpdatePhoto = () => {
  const currentPhoto = getUserCookie();
  const [updatedPhoto, setUpdatedPhoto] = useState<Photo>(currentPhoto.photo);
  const { loading, submitUpdateUserPhoto } = useUpdateUserPhoto(
    updatedPhoto.src
  );

  return (
    <section className="__grid-illustrations">
      <AppTitle />

      {loading ? (
        <Loader color={'GREEN'} />
      ) : (
        <form className="form-element" onSubmit={() => submitUpdateUserPhoto()}>
          <legend className="page-legend">UPDATE PHOTO.</legend>
          <div className="grid">
            {user_photos_options.map((photo: Photo, key) => (
              <div key={key}>
                <input
                  type="radio"
                  id={`input-selected-image-id${photo.id}`}
                  name="selected-image"
                  defaultChecked={currentPhoto.photo == photo.src}
                  onChange={() => setUpdatedPhoto(photo)}
                />
                <label
                  htmlFor={`input-selected-image-id${photo.id}`}
                  key={photo.id}
                >
                  <img src={photo.src} />
                </label>
              </div>
            ))}
          </div>

          <ButtonDefault btnName="UPDATE" />
        </form>
      )}
    </section>
  );
};

export default UpdatePhoto;

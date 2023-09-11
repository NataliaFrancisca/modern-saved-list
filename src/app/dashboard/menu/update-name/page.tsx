'use client';
import AppTitle from '@/app/components/app-title';
import ButtonDefault from '@/app/components/button-default';
import { useUpdateUser } from '@/app/hooks/useUpdateUser';
import { getUserCookie } from '@/app/utils/local-storage/save-user';
import { useState } from 'react';

const UpdateName = () => {
  const user = getUserCookie();
  const [name, setName] = useState<string>('');

  const { error, submitUpdateUserName } = useUpdateUser(name);

  return (
    <section className="base-page">
      <AppTitle />

      <form className="form-element" onSubmit={() => submitUpdateUserName()}>
        <legend className="page-legend">UPDATE USERNAME.</legend>

        <div className="group-label-input">
          <label htmlFor="name-input">NAME:</label>
          <input
            type="text"
            id="name-input"
            placeholder={'type your new username'}
            onChange={(e) => setName(e.target.value)}
          />
          {error && <span>{error}</span>}
        </div>

        <ButtonDefault btnName="UPDATE" />
      </form>
    </section>
  );
};

export default UpdateName;

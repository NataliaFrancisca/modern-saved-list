'use client';
import AppTitle from '@/app/components/app-title';
import ButtonDefault from '@/app/components/button-default';
import Loader from '@/app/components/loader';
import { useUpdateUserName } from '@/app/hooks/useUpdateUser';
import { useState } from 'react';

const UpdateName = () => {
  const [name, setName] = useState<string>('');
  const { loading, error, submitUpdateUserName } = useUpdateUserName(name);

  return (
    <section className="default-page">
      <AppTitle />

      {loading ? (
        <Loader color={'GREEN'} />
      ) : (
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
      )}
    </section>
  );
};

export default UpdateName;

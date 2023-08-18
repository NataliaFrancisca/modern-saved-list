'use client';
import { useState } from 'react';
import AppTitle from '@/app/components/app-title';
import ButtonDefault from '@/app/components/button-default';
import { useSave } from '../../hooks/useSaveContent';

const SaveContent = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  const { error, saveContent } = useSave({ title, link, type, image });

  return (
    <section className="base-page">
      <AppTitle />
      <form className="form-element" onSubmit={() => saveContent()}>
        <legend className="page-legend">SAVE CONTENT</legend>

        <div className="group-label-input">
          <label htmlFor="title-input">TITLE:</label>
          <input
            type="text"
            id="title-input"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <span>{error.title}</span>}
        </div>

        <div className="group-label-input">
          <label htmlFor="link-input">LINK:</label>
          <input
            type="text"
            id="link-input"
            required
            onChange={(e) => setLink(e.target.value)}
          />
          {error && <span>{error.link}</span>}
        </div>

        <div className="group-label-input">
          <label htmlFor="type-input">OPTION:</label>
          <input
            list="options"
            name="type-input"
            id="type-input"
            placeholder="NONE"
            required
            onChange={(e) => setType(e.target.value)}
          />

          <datalist id="options">
            <option value="ARTICLE" />
            <option value="BOOK" />
            <option value="PODCAST" />
            <option value="VIDEO" />
            <option value="OTHERS" />
          </datalist>

          {error && <span>{error.type}</span>}
        </div>

        <div className="group-label-input">
          <label htmlFor="image-input">IMAGE:</label>
          <input
            type="url"
            id="image-input"
            pattern="https://.*"
            onChange={(e) => setImage(e.target.value)}
          />
          {error && <span>{error.image}</span>}
        </div>

        <ButtonDefault btnName="SAVE" />
      </form>
    </section>
  );
};

export default SaveContent;

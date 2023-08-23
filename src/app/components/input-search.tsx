import { useState } from 'react';

const InputSearch = (props: { toggleInput: boolean }) => {
  const [searchText, setSearchText] = useState('');

  const onHandleSubmit = () => {
    event?.preventDefault();
  };

  return (
    <form
      className={`form-search-content isHidden-${props.toggleInput}`}
      onSubmit={() => onHandleSubmit()}
    >
      <img src="icon/search.svg" alt="search icon" />
      <input
        type="text"
        placeholder="TYPE SOMETHING"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default InputSearch;

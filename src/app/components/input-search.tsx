import { useState } from 'react';

const InputSearch = (props: { onUpdateSearchData: Function }) => {
  const [searchText, setSearchText] = useState('');

  const onHandleSubmit = () => {
    event?.preventDefault();
    props.onUpdateSearchData(searchText);
  };

  return (
    <form className={`form-search-content`} onSubmit={() => onHandleSubmit()}>
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

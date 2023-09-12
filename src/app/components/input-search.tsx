import { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputSearch = (props: {
  onUpdateSearchData: Function;
  onToggleInput: Function;
}) => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const onHandleSubmit = () => {
    event?.preventDefault();
    props.onUpdateSearchData(searchText.toUpperCase());
  };

  const onCloseInput = () => {
    props.onUpdateSearchData('');
    props.onToggleInput();
    router.push('/dashboard');
  };

  return (
    <form
      className="__dashboard-input-search"
      onSubmit={() => onHandleSubmit()}
    >
      <img src="icon/search.svg" alt="search icon" />
      <input
        type="text"
        placeholder="TYPE SOMETHING"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img
        src="icon/cancel.svg"
        alt="cancel icon"
        onClick={() => onCloseInput()}
      />
    </form>
  );
};

export default InputSearch;

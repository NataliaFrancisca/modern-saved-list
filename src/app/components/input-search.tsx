import { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputSearch = (props: {
  onUpdateSearchData: Function;
  closeInput: Function;
}) => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const onHandleSubmit = () => {
    event?.preventDefault();
    props.onUpdateSearchData(searchText);
  };

  const onCancelSearch = () => {
    props.onUpdateSearchData('');
    props.closeInput(true);
    router.push('/dashboard');
  };

  return (
    <form className={`form-search-content`} onSubmit={() => onHandleSubmit()}>
      <img src="icon/search.svg" alt="search icon" />
      <input
        type="text"
        placeholder="TYPE SOMETHING"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img
        src="icon/cancel.svg"
        alt="cancel icon"
        onClick={() => onCancelSearch()}
      />
    </form>
  );
};

export default InputSearch;

'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

type CallbackFunction = () => void;
type CallbackFunctionWithProps = (value: string) => void;

const DashboardInputSearch = (props: {onUpdateSearchData: CallbackFunctionWithProps, onToggleInput: CallbackFunction}) => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const onHandleSubmit = () => {
    event?.preventDefault();
    props.onUpdateSearchData(searchText.toUpperCase());
  };

  const onCloseInput = () => {
    props.onUpdateSearchData('');
    props.onToggleInput();
    router.push("/dashboard");
  };
  
  return (
    <form className="__dashboard-input-search" onSubmit={() => onHandleSubmit()}>
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
  )
}

export default DashboardInputSearch;
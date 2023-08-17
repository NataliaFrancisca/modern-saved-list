'use client';
import { useState } from 'react';
import AppTitle from '../components/app-title';
import { useCurrentUser } from './useCurrentUser';

import Filter from '../components/filter';

const Dashboard = () => {
  const data = useCurrentUser();
  const [toggleInput, setToogleInput] = useState(true);
  const [searchText, setSearchText] = useState('');

  const onToggleInputSearch = () => {
    setToogleInput(!toggleInput);
  };

  const onHandleSubmit = () => {
    event?.preventDefault();
  };

  return (
    <section className="base-page">
      <AppTitle />

      <header className="header-dashboard">
        <button>
          <img
            src="icon/search.svg"
            alt="search icon"
            onClick={() => onToggleInputSearch()}
          />
        </button>

        <img src="user-image/user-option-one.svg" alt="user illustration" />

        <button>
          <img src="icon/menu.svg" alt="menu icon" />
        </button>
      </header>

      <h1 className={`dashboard-user-name inputHidden-${toggleInput}`}>
        OLÁ, {data?.displayName}!
      </h1>

      <form
        className={`form-search-content isHidden-${toggleInput}`}
        onSubmit={() => onHandleSubmit()}
      >
        <img src="icon/search.svg" alt="search icon" />
        <input
          type="text"
          placeholder="TYPE SOMETHING"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>

      <Filter />
    </section>
  );
};

export default Dashboard;

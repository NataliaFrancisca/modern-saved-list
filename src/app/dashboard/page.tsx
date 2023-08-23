'use client';
import { useEffect, useState } from 'react';
import AppTitle from '../components/app-title';
import Loader from '../components/loader';
import { useCurrentUser } from '../hooks/useCurrentUser';
import Filter from '../components/filter';
import InputSearch from '../components/input-search';

const Dashboard = () => {
  const [toggleInput, setToggleInput] = useState(true);
  const [loading, setLoading] = useState(true);

  const userData = useCurrentUser();

  const onToggleInputSearch = () => setToggleInput(!toggleInput);

  useEffect(() => {
    userData ? setLoading(false) : setLoading(true);
    () => {};
  }, [userData]);

  return (
    <main className="base-page">
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
      {loading ? (
        <Loader />
      ) : (
        <h1 className={`dashboard-user-name inputHidden-${toggleInput}`}>
          OLÁ, {userData?.displayName}!
        </h1>
      )}

      <InputSearch toggleInput={toggleInput} />

      <Filter />
    </main>
  );
};

export default Dashboard;

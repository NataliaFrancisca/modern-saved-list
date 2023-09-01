'use client';
import { useState } from 'react';
import AppTitle from '../components/app-title';
import Filter from '../components/filter';
import InputSearch from '../components/input-search';
import { getUserSession } from '../utils/local-storage/save-user';
import PrivateRoute from './private-page';

const Dashboard = () => {
  const userInformation = getUserSession();

  const [toggleInput, setToggleInput] = useState(true);
  const [searchData, setSearchData] = useState('');

  const onToggleInputSearch = () => setToggleInput(!toggleInput);

  return (
    <PrivateRoute>
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

        <h1 className={`dashboard-user-name inputHidden-${toggleInput}`}>
          OLÁ, {userInformation?.displayName}!
        </h1>

        {!toggleInput && <InputSearch onUpdateSearchData={setSearchData} />}

        <Filter searchData={searchData} />
      </main>
    </PrivateRoute>
  );
};

export default Dashboard;

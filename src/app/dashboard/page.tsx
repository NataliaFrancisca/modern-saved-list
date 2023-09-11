'use client';
import { useEffect, useState } from 'react';
import AppTitle from '../components/app-title';
import Filter from '../components/filter';
import InputSearch from '../components/input-search';
import { getUserCookie } from '../utils/local-storage/save-user';
import PrivateRoute from './private-route';
import DashboardNav from '../components/dashboard-nav';
import Loader from '../components/loader';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const userInformation = getUserCookie();
  const router = useRouter();

  const [toggleInput, setToggleInput] = useState(true);
  const [searchData, setSearchData] = useState('');

  const onToggleInputSearch = () => setToggleInput(!toggleInput);

  return (
    <PrivateRoute>
      <AppTitle />
      <header className="header-dashboard">
        <button>
          <img
            src="icon/search.svg"
            alt="search icon"
            onClick={() => onToggleInputSearch()}
          />
        </button>

        <img src={userInformation.photo} alt="user illustration" />

        <button>
          <img
            src="icon/menu.svg"
            alt="menu icon"
            onClick={() => router.push('/dashboard/menu')}
          />
        </button>
      </header>

      <h1 className={`dashboard-user-name inputHidden-${toggleInput}`}>
        OLÁ, {userInformation.displayName}!
      </h1>

      {!toggleInput && (
        <InputSearch
          onUpdateSearchData={setSearchData}
          closeInput={setToggleInput}
        />
      )}

      <DashboardNav
        onCloseInput={onToggleInputSearch}
        statusInput={toggleInput}
      />

      <Filter searchData={searchData} />
    </PrivateRoute>
  );
};

export default Dashboard;

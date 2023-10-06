'use client';
import { useState, useMemo } from 'react';
import { getUserCookie } from '../utils/local-storage/save-user';

import PrivateRoute from './private-route';
import AppTitle from '../components/app-title';
import Filter from '../components/filter';
import InputSearch from '../components/input-search';
import DashboardNav from '../components/dashboard-nav';
import DashboardHeader from '../components/dashboard-header';

const Dashboard = () => {
  const userInformation = useMemo(() => {
    return getUserCookie();
  }, []);

  const [toggleInput, setToggleInput] = useState(true);
  const [searchData, setSearchData] = useState('');

  const onToggleInputSearch = () => setToggleInput(!toggleInput);

  return (
    <PrivateRoute childrenClass="__dashboard">
      <AppTitle />

      <DashboardHeader
        userPhoto={userInformation.photo}
        onToggleInput={onToggleInputSearch}
      />

      <h1 className="__dashboard-displayName">
        OLÁ, {userInformation.displayName}!
      </h1>

      {!toggleInput && (
        <InputSearch
          onUpdateSearchData={setSearchData}
          onToggleInput={onToggleInputSearch}
        />
      )}

      <DashboardNav
        onToggleInput={onToggleInputSearch}
        statusInput={toggleInput}
      />

      <Filter searchData={searchData} />
    </PrivateRoute>
  );
};

export default Dashboard;

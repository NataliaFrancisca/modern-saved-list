'use client';
import { useEffect } from 'react';
import AppTitle from '../components/app-title';
import DashboardNav from '../components/dashboard-nav';
import { useCurrentUser } from './useCurrentUser';

import Filter from '../components/filter';

const Dashboard = () => {
  const data = useCurrentUser();

  return (
    <section className="base-page">
      <AppTitle />

      <header className="header-dashboard">
        <button>
          <img src="icon/search.svg" alt="search icon" />
        </button>

        <img src="user-image/user-option-one.svg" alt="user illustration" />

        <button>
          <img src="icon/menu.svg" alt="menu icon" />
        </button>
      </header>

      <h1 className="dashboard-user-name">OLÁ, {data?.displayName}!</h1>

      {/* <Filter /> */}
    </section>
  );
};

export default Dashboard;

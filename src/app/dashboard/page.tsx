'use client';
import { useMemo, useState } from "react";
import AppName from "../component/app-name";
import { getUserCookie } from "@/utils/nookies/save-user";
import DashboardInputSearch from "../component/dashboard-input-search";
import DashboardView from "../component/dashboard-view";
import PrivateRoute from "./private";
import DashboardNav from "../component/dashboard-nav";

const Dashboard = () => {
  const userInformation = useMemo(() => {
    return getUserCookie();
  },[]);


  const [toggleInput, setToggleInput] = useState(true);
  const [searchData, setSearchData] = useState('');

  const onToggleInputSearch = () => setToggleInput(!toggleInput);

  return (
    <PrivateRoute childrenClass="__dashboard">
      <AppName />

      <header className="__dashboard-header">
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
            // onClick={() => router.push('/dashboard/menu')}
          />
        </button>
      </header>

      <h1 className="__dashboard-displayname">
        OLÁ, {userInformation.displayName}!
      </h1>

      {!toggleInput && (
        <DashboardInputSearch 
          onUpdateSearchData={setSearchData}
          onToggleInput={onToggleInputSearch} 
        />)
      }

      <DashboardNav onToggleInput={onToggleInputSearch} statusInput={toggleInput} />

      <DashboardView searchResult={searchData} />
    </PrivateRoute>
     
  );
};
export default Dashboard;

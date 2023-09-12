'use client';
import Link from 'next/link';
import AppTitle from '@/app/components/app-title';
import { getUserCookie } from '@/app/utils/local-storage/save-user';
import PrivateRoute from '../private-route';

const Menu = () => {
  const userInformation = getUserCookie();

  return (
    <PrivateRoute childrenClass="__menu">
      <AppTitle />

      <header className="__dashboard-header">
        <img src={userInformation.photo} alt="user illustration" />
      </header>

      <h1 className="__dashboard-displayName">
        OLÁ, {userInformation.displayName}!
      </h1>

      <menu className="menu-nav">
        <Link
          href={{
            pathname: 'menu/update-name'
          }}
        >
          UPDATE USERNAME
        </Link>

        <Link
          href={{
            pathname: 'menu/update-photo'
          }}
        >
          UPDATE PHOTO
        </Link>

        <Link
          href={{
            pathname: 'menu/logout'
          }}
        >
          LOGOUT
        </Link>

        <Link
          href={{
            pathname: '/menu/delete-account',
            query: { filter: 'delete-account' }
          }}
          className="warning-link"
        >
          DELETE ACCOUNT
        </Link>
      </menu>
    </PrivateRoute>
  );
};

export default Menu;

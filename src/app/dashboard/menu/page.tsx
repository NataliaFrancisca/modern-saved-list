'use client';
import Link from 'next/link';
import AppTitle from '@/app/components/app-title';
import { getUserCookie } from '@/app/utils/local-storage/save-user';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import PrivateRoute from '../private-route';

const Menu = () => {
  const userInformation = getUserCookie();
  const router = useRouter();

  return (
    <PrivateRoute>
      <section className="base-page">
        <AppTitle />

        <header className="header-dashboard">
          <img src={userInformation.photo} alt="user illustration" />
        </header>

        <h1 className={`dashboard-user-name`}>
          OLÁ, {userInformation.displayName}!
        </h1>

        <menu className="menu-options">
          <Link
            href={{
              pathname: '/menu/update-name'
            }}
          >
            UPDATE USERNAME
          </Link>

          <Link
            href={{
              pathname: '/menu/update-photo'
            }}
          >
            UPDATE PHOTO
          </Link>

          <Link
            href={{
              pathname: '/menu/logout'
            }}
          >
            LOGOUT
          </Link>

          <Link
            href={{
              pathname: '/menu',
              query: { filter: 'delete-account' }
            }}
          >
            DELETE ACCOUNT
          </Link>
        </menu>
      </section>
    </PrivateRoute>
  );
};

export default Menu;

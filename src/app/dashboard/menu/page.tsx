'use client';
import Link from 'next/link';
import AppTitle from '@/app/components/app-title';
import { getUserCookie } from '@/app/utils/local-storage/save-user';
import PrivateRoute from '../private-route';
import Logout from './logout/page';
import { useState } from 'react';
import DeleteAcount from './delete-account/page';

const Menu = () => {
  const [modalLogoutVisibility, setModalLogoutVisibility] = useState(false);
  const [modalDeleteAccountVisibility, setModalDeleteAccountVisibility] =
    useState(false);

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

        <a onClick={() => setModalLogoutVisibility(!modalLogoutVisibility)}>
          LOGOUT
        </a>

        <a
          className="warning-link"
          onClick={() =>
            setModalDeleteAccountVisibility(!modalDeleteAccountVisibility)
          }
        >
          DELETE ACCOUNT
        </a>
      </menu>

      {modalLogoutVisibility && (
        <Logout setModalVisibility={setModalLogoutVisibility} />
      )}

      {modalDeleteAccountVisibility && (
        <DeleteAcount setModalVisibility={setModalDeleteAccountVisibility} />
      )}
    </PrivateRoute>
  );
};

export default Menu;

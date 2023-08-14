'use client';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase/config';
import { useCurrentUser } from './useCurrentUser';

const Dashboard = () => {
  const data = useCurrentUser();
  console.log(data);
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user);
  //   } else {
  //     return 'user not connect';
  //   }
  // });

  return (
    <>
      <h1>DASHBOARD SHITS</h1>
      <h1>{data?.displayName}</h1>
    </>
  );
};

export default Dashboard;

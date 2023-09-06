'use client';
import { useRouter } from 'next/navigation';
import AppTitle from './components/app-title';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { useEffect } from 'react';
import { getUserCookie, setUserCookie } from './utils/local-storage/save-user';
import { User } from './types/types';

export default function Home() {
  const router = useRouter();

  const onNav = () => {
    router.push('/register');
  };

  useEffect(() => {
    const userCookie = getUserCookie();
    console.log("I'M beign called at page");
    if (userCookie) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <main className="page">
      <AppTitle />
      <img
        className="page-image"
        src="illustration/illustration-small-size.svg"
      />

      <button className="page-button" onClick={onNav}>
        GET STARTED
      </button>
    </main>
  );
}

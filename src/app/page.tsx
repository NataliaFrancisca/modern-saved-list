'use client';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { useEffect } from 'react';

import AppName from './component/app-name';
import DefaultButton from './component/default-button';

export default function Home() {
  const router = useRouter();

  function onNavigation() {
    router.push('/register');
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    });
  }, [router]);

  return (
    <main className="home-component">
      <AppName />

      <img
        className="home_illustration"
        src="./illustration/illustration-small-size.svg"
      />

      <DefaultButton message="GET STARTED" buttonEvent={onNavigation} />
    </main>
  );
}

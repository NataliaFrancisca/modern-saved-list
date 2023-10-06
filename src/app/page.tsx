'use client';
import { useRouter } from 'next/navigation';
import AppTitle from './components/app-title';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const onNav = () => {
    router.push('/register');
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    });
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

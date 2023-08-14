'use client';
import { useRouter } from 'next/navigation';
import AppTitle from './components/app-title';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/config';

export default function Home() {
  const router = useRouter();

  const onNav = () => {
    router.push('/register');
  };

  onAuthStateChanged(auth, (currentUser) => {
    currentUser && router.push('/dashboard');
  });

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

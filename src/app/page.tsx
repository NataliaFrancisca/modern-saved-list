'use client';
import { useRouter } from 'next/navigation';
import AppTitle from './components/app-title';

export default function Home() {
  const router = useRouter();

  const onNav = () => {
    router.push('/register');
  };

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

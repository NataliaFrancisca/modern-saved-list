'use client';
import { useRouter } from 'next/navigation';
import AppName from './component/app-name';
import DefaultButton from './component/default-button';

export default function Home() {
  const router = useRouter();

  function onNavigation() {
    router.push('/register');
  }

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

'use client';
import { useRouter } from 'next/navigation';
import AppName from './component/app-name';
import DefaultButton from './component/default-button';

export default function Home() {
  const router = useRouter();

  return (
    <main className="home-page">
      <AppName />

      <img
        className="home_illustration"
        src="./illustration/illustration-small-size.svg"
      />

      <DefaultButton
        message="GET STARTED"
        buttonEvent={() => router.push('/register')}
      />
    </main>
  );
}

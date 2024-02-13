import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { setUserCookie } from '@/utils/nookies/save-user';
import Loader from '../component/loader';
import { auth } from '@/firebase/config';

interface PrivateRouteProps {
  children: React.ReactNode;
  childrenClass: string;
}

function PrivateRoute({ children, childrenClass }: PrivateRouteProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(!loading);
        setUserCookie(currentUser);
      } else {
        router.push('/');
      }
    });
  }, []);

  return loading ? (
    <Loader color={'GREEN'} />
  ) : (
    <section className={`default-page ${childrenClass}`}>{children}</section>
  );
}

export default PrivateRoute;

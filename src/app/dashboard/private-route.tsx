import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserCookie } from '../utils/local-storage/save-user';
import Loader from '../components/loader';
import { useGetCurrentUser } from '../hooks/useGetCurrentUser';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

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

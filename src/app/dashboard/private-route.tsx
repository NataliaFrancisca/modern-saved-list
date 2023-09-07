import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Importe seu contexto de autenticação
import { getUserCookie } from '../utils/local-storage/save-user';
import Loader from '../components/loader';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter();
  const userInformation = getUserCookie();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userInformation) {
      router.push('/');
      return;
    }

    if (userInformation) {
      setLoading(!loading);
    }
  }, []);

  return loading ? (
    <Loader color={'GREEN'} />
  ) : (
    <section className="base-page">{children}</section>
  );
}

export default PrivateRoute;

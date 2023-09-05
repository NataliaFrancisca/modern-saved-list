import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importe seu contexto de autenticação
import { getUserSession } from '../utils/local-storage/save-user';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter();
  const userInformation = getUserSession();

  useEffect(() => {
    if (!userInformation) {
      router.push('/');
      return;
    }
  }, [userInformation, router]);

  return userInformation && <>{children}</>;
}

export default PrivateRoute;

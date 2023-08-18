import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import auth from '../firebase/config';

type User = {
  displayName: string | null;
  email: string | null;
  uid: string;
};

export const useCurrentUser = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, email, uid } = currentUser;
        setUser({ displayName, email, uid });
      } else {
        return 'user not connect';
      }
    });
  }, []);

  return user;
};

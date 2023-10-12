import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { deleteCookie } from '@/app/utils/local-storage/save-user';

export async function signOutUser() {
  try {
    const result = await signOut(auth);
    console.log(result);
    deleteCookie();
    return {
      message: 'singout with sucess',
      data: result
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      message: error.message
    };
  }
}

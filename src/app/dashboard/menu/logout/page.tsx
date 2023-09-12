'use client';
import AppTitle from '@/app/components/app-title';
import ButtonDefault from '@/app/components/button-default';
import { signOutUser } from '@/app/firebase/auth/singout';
import { deleteCookie } from '@/app/utils/local-storage/save-user';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  const sumbitLogoutUser = async () => {
    await signOutUser();
    deleteCookie();
    router.push('/login');
  };

  return (
    <section className="default-page">
      <AppTitle />

      <form className="form-element" onSubmit={() => sumbitLogoutUser()}>
        <legend className="page-legend">UPDATE USERNAME.</legend>
        <label>Are you sure to logout?</label>
        <ButtonDefault btnName="LOGOUT" />
      </form>
    </section>
  );
};

export default Logout;

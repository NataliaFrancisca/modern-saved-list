'use client';
import ButtonDefault from '@/app/components/button-default';
import { signOutUser } from '@/app/firebase/auth/singout';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal';

const Logout = (props: { setModalVisibility: Function }) => {
  const router = useRouter();

  const onLogoutUser = async () => {
    await signOutUser();
    router.push('/login');
  };

  return (
    <Modal setModalVisibility={props.setModalVisibility}>
      <form className="form-element" onSubmit={() => onLogoutUser()}>
        <label className="logout-message">
          Are you sure do you want to logout?
        </label>
        <ButtonDefault btnName="LOGOUT" />
      </form>
    </Modal>
  );
};

export default Logout;

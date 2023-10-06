'use client';
import ButtonDefault from '@/app/components/button-default';
import Modal from '@/app/components/modal';
import { deleteCookie } from '@/app/utils/local-storage/save-user';
import { useRouter } from 'next/router';

const DeleteAccount = (props: { setModalVisibility: Function }) => {
  const router = useRouter();

  const onLogoutUser = async () => {
    // await signOutUser();
    deleteCookie();
    router.push('/register');
  };

  return (
    <Modal setModalVisibility={props.setModalVisibility}>
      <form className="form-element" onSubmit={() => onLogoutUser()}>
        <label className="logout-message">
          Are you sure do you want to delete your account?
        </label>
        <ButtonDefault btnName="LOGOUT" />
      </form>
    </Modal>
  );
};

export default DeleteAccount;

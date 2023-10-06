'use client';
import ButtonDefault from '@/app/components/button-default';
import { deleteCookie } from '@/app/utils/local-storage/save-user';
import { useRouter } from 'next/router';

type CallbackFunction = (value: boolean) => void;

const DeleteAccount = (props: { setModalVisibility: CallbackFunction }) => {
  const router = useRouter();

  const onLogoutUser = async () => {
    // await signOutUser();
    deleteCookie();
    router.push('/register');
  };

  const onCloseModal = () => {
    props.setModalVisibility(false);
  };

  return (
    <section className="default-modal">
      <button className="btn-close-modal" onClick={() => onCloseModal()}>
        <img src="/icon/cancel.svg" />
      </button>

      <form className="form-element" onSubmit={() => onLogoutUser()}>
        <label className="logout-message">
          Are you sure do you want to delete your account?
        </label>
        <ButtonDefault btnName="LOGOUT" />
      </form>
    </section>
  );
};

export default DeleteAccount;

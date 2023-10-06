'use client';
import ButtonDefault from '@/app/components/button-default';
import { signOutUser } from '@/app/firebase/auth/singout';
import { useRouter } from 'next/navigation';

type CallbackFunction = (value: boolean) => void;

const Logout = (props: { setModalVisibility: CallbackFunction }) => {
  const router = useRouter();

  const onLogoutUser = async () => {
    await signOutUser();
    router.push('/login');
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
          Are you sure do you want to logout?
        </label>
        <ButtonDefault btnName="LOGOUT" />
      </form>
    </section>
  );
};

export default Logout;

interface IModal {
  children: React.ReactNode;
  setModalVisibility: Function;
}

function Modal({ children, setModalVisibility }: IModal) {
  const onCloseModal = () => {
    setModalVisibility(false);
  };

  return (
    <section className="default-modal">
      <button className="btn-close-modal" onClick={() => onCloseModal()}>
        <img src="/icon/cancel.svg" />
      </button>

      {children}
    </section>
  );
}
export default Modal;

import { IButton } from '../ts/interfaces';

const DefaultButton = (obj: IButton) => {
  return (
    <button
      className="defaultButton-component"
      onClick={() => obj.buttonEvent()}
    >
      {obj.message}
    </button>
  );
};

export default DefaultButton;

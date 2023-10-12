import { IButton } from '../ts/interfaces';

const DefaultButton = (obj: IButton) => {
  if (obj.buttonEvent == undefined) {
    return <button className="defaultButton-component">{obj.message}</button>;
  } else {
    return (
      <button
        className="defaultButton-component"
        onClick={() => obj.buttonEvent && obj.buttonEvent()}
      >
        {obj.message}
      </button>
    );
  }
};

export default DefaultButton;

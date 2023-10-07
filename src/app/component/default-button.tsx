import { IButton } from '../ts/interfaces';

const DefaultButton = (obj: IButton) => {
  return <button className="defaultButton-component">{obj.message}</button>;
};

export default DefaultButton;

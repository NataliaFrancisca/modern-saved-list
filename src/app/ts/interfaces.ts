export interface IButton {
  message: string;
  buttonEvent?: (value?: string | boolean) => void;
}

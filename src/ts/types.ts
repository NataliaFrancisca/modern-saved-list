export type TLoginForm = {
    email: string;
    password: string;
}

export type TErrorLoginForm = {
    email: string | boolean;
    password: string | boolean;
    google?: string | boolean;
};
  
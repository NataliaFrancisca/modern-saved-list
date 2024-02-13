export type TLoginForm = {
    email: string;
    password: string;
}

export type TErrorLoginForm = {
    email: string | boolean;
    password: string | boolean;
    google?: string | boolean;
};
  
export type TRegisterForm = {
    name: string;
    email: string;
    password: string;
}

export type TErrorRegisterForm = {
    name: string | boolean;
    email: string | boolean;
    password: string | boolean;
    google?: string | boolean;
}

export type TContent = {
    title: string;
    link: string;
    type: string;
    image?: string;
}


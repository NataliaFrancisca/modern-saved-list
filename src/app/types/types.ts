export type FormLogin = {
    email: string;
    password: string;
}
export type FormRegister = {
    name: string;
    email: string;
    password: string;
}

export type ErrorFormLogin = {
    email: string | boolean;
    password: string | boolean;
    google?: string | boolean
}

export type ErrorFormRegister = {
    name: string | boolean;
    email: string | boolean;
    password: string | boolean;
    google?: string | boolean
}

export type FormContent = {
    title: string;
    link: string;
    type: string;
    image?: string;
};

export type ErrorFormContent = {
    title: string | boolean;
    link: string | boolean;
    type: string | boolean;
    image?: string | boolean;
}

export type User = {
    displayName: string;
    email: string;
    photo: string;
    uid: string;
};
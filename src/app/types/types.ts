export type InputFormLogin = {
    email: string;
    password: string;
}
export type InputFormRegister = {
    name: string;
    email: string;
    password: string;
}
export type InputError = {
    name?: string | boolean;
    email: string | boolean;
    password: string | boolean;
}
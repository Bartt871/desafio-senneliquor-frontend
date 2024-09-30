import { ReactNode } from "react";

export interface IUser {
    name?: string;
    token?: string;
    logged_id?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export interface IAuthProvider {
    children: ReactNode
}
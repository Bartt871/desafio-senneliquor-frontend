import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | undefined>();

    useEffect(() => {
        const user = getUserLocalStorage();

        user && setUser(user);
    }, []);

    async function authenticate(username: string, password: string): Promise<boolean> {
        const response = await LoginRequest(username, password);

        if (!response) {
            return false
        }

        const payload: IUser = {
            token: response.token,
            logged_id: response.logged_id,
            name: response.name
        };

        setUser(payload);
        setUserLocalStorage(payload);

        return true;
    }

    function logout() {
        setUser(undefined);
        setUserLocalStorage(undefined);
    }

    return <AuthContext.Provider value={{ ...user, authenticate, logout }}>{children}</AuthContext.Provider>;
}
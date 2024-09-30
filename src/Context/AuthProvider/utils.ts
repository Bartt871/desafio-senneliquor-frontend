import { Session } from "../../Requests/Session";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | undefined) {
    if (!user) {
        localStorage.removeItem('u');
        return;
    }

    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage(): IUser | undefined {
    const json = localStorage.getItem('u');

    if (!json) {
        return undefined;
    }

    return JSON.parse(json) ?? undefined;
}

export async function LoginRequest(username: string, password: string) {
    try {
        const session = new Session();
        return await session.startSession(username, password);
    } catch (error) {
        return null;
    }
}
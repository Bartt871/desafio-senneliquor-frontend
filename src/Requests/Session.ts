import { IStartSessionResponse } from "Session";
import { Api } from "./Config/Api";

export class Session extends Api {
    public startSession = async (username: string, password: string) => {
        return (await this.api.post<IStartSessionResponse>('/api/no-auth', { username, password })).data;
    }
}
declare module 'Session' {
    export interface IStartSessionResponse {
        token: string;
        name: string;
        logged_id: string;
    }
}
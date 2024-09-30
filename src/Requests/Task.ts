import { ITaskFilterResponse } from 'Task';
import { Api } from "./Config/Api";

export class Task extends Api {
    public filterQueryKey = (params: any) => ['task_filter', params];
    public filter = async (search?: string, abortSignal?: AbortSignal) => {
        return (await this.api.get<ITaskFilterResponse>('/api/task', { params: { search }, signal: abortSignal })).data;
    }
}
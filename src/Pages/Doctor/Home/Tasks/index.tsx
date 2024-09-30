import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Task } from "Requests/Task";
import { ITaskFilterResponse } from "Task";
import { TaskCard } from "./TaskCard";

import './style.scss';

const task = new Task();

export const Tasks = () => {
    const taskFilterAbortControllerRef = useRef<AbortController | null>(null);
    const [search, setSearch] = useState<string>();

    const { data } = useQuery<ITaskFilterResponse>(
        {
            queryKey: task.filterQueryKey({ search }),
            queryFn: () => {
                taskFilterAbortControllerRef.current && taskFilterAbortControllerRef.current.abort();
                taskFilterAbortControllerRef.current = new AbortController();

                return task.filter(search, taskFilterAbortControllerRef.current.signal);
            },
            staleTime: 30 * 1000,
            retry: false
        }
    );

    return (
        <>
            <div className="doctor_home_tasks">
                <header>
                    <div className="title">
                        Chamados
                    </div>
                    <div className="search">
                        <input placeholder="Buscar Paciente" type="text" onChange={(event) => setSearch(event.target.value)} />
                    </div>
                </header>
                <div className="tasks">
                    {data?.tasks.map(task => <TaskCard task={task} />)}
                </div >
            </div>
        </>
    );
}
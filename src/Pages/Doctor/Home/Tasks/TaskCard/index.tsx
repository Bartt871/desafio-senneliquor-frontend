import { ITask } from "Task";
import {
    TASK_BIOLOGICAL_GENDER_COLOR,
    TASK_BIOLOGICAL_GENDER_CONTENT,
    TASK_CARE_CATEGORY_COLOR,
    TASK_CARE_CATEGORY_CONTENT,
    TASK_STATUS_COLOR,
    TASK_STATUS_CONTENT
} from "Utils/Task";

import './style.scss';

export const TaskCard = ({ task }: { task: ITask }) => {
    const requestedAt = new Date(task.createdAt);

    return (
        <>
            <div className="task_card">
                <header>
                    <div className="requested_at">
                        <div className="hour">
                            {requestedAt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })}
                        </div>
                        <div className="date">
                            {requestedAt.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: '2-digit' })}
                        </div>
                    </div>
                    <div className="status">
                        <label
                            children={TASK_STATUS_CONTENT[task.status]}
                            className={`--${TASK_STATUS_COLOR[task.status]}`}
                        />
                    </div>
                </header>
                <main>
                    <div className="patient_name">
                        <label className="--label">Paciente: </label>
                        <div className="--value" title={task.patient_name}>{task.patient_name}</div>
                    </div>
                    <div className="patient_definition">
                        <div className="care_category">
                            <label
                                children={TASK_CARE_CATEGORY_CONTENT[task.care_category]}
                                className={`--${TASK_CARE_CATEGORY_COLOR[task.care_category]}`}
                            />
                        </div>
                        <div className="biological_gender">
                            <label
                                children={TASK_BIOLOGICAL_GENDER_CONTENT[task.patient_biological_gender]}
                                className={`--${TASK_BIOLOGICAL_GENDER_COLOR[task.patient_biological_gender]}`}
                            />
                        </div>
                    </div>
                </main>
                <footer>
                    <button className="--secondary">Atender</button>
                </footer>
            </div>
        </>
    )
}
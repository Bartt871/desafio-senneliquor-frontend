declare module 'Task' {
    type BiologicalGenderMale = 'M';
    type BiologicalGenderFemale = 'F';
    type BiologicalGenderNotInformed = 'N';

    export type BiologicalGender = BiologicalGenderMale | BiologicalGenderFemale | BiologicalGenderNotInformed;

    type CareCategoryEmergency = 1;
    type CareCategoryInpatient = 2;

    export type CareCategory = CareCategoryEmergency | CareCategoryInpatient;

    type StatusOpen = 'A';
    type StatusClosed = 'E';
    type StatusCancelled = 'C';

    export type Status = StatusOpen | StatusClosed | StatusCancelled;

    export interface ITask {
        _id: string;
        hospital_id: string;
        doctor_id: string;
        care_category: CareCategory;
        patient_name: string;
        patient_biological_gender: BiologicalGender;
        status: Status;
        createdAt: string;
    }

    export interface ITaskFilterResponse {
        total: number;
        tasks: ITask[];
    }
}
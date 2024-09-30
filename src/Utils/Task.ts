import { Color } from "Color";
import { BiologicalGender, CareCategory, Status } from "Task";

export const TASK_BIOLOGICAL_GENDER_COLOR: Record<BiologicalGender, Color> = { 'M': 'info', 'F': 'success', 'N': 'unabled--dark' };
export const TASK_BIOLOGICAL_GENDER_CONTENT: Record<BiologicalGender, string> = { 'M': 'Masculino', 'F': 'Feminino', 'N': 'Não Definido' };

export const TASK_CARE_CATEGORY_COLOR: Record<CareCategory, Color> = { 1: 'danger', 2: 'warning' };
export const TASK_CARE_CATEGORY_CONTENT: Record<CareCategory, string> = { 1: 'Pronto Socorro', 2: 'Internado' };

export const TASK_STATUS_COLOR: Record<Status, Color> = { 'A': 'warning', 'E': 'success', 'C': 'danger' }
export const TASK_STATUS_CONTENT: Record<Status, string> = { 'A': 'Aberto', 'E': 'Encerrado', 'C': 'Cancelado' }
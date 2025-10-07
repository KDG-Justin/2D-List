import { ToDo } from "./ToDo";

export interface Category {
    uuid: string; 
    name: string;
    toDos: ToDo[]; 
}

export type CategoryData = {
    name: string; 
}
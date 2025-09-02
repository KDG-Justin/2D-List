import { StatusEnum } from "./enums/StatusEnum";

export interface ToDo {
    uuid: string; 
    creationDate: Date;
    completionDate?: Date;
    text: string; 
    status: StatusEnum;    
    unitIdle?: string;  
}

export type ToDoData = {
    text: string; 
}
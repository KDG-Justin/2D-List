import { Priority } from "./enums/Priority";
import { StatusEnum } from "./enums/StatusEnum";

export interface ToDo {
    uuid: string; 
    creationDate: Date;
    completionDate?: Date;
    text: string; 
    status: StatusEnum;
    priority: Priority    
    unitIdle?: string;  
}

export type ToDoData = {
    text: string; 
    priority: Priority; 
}
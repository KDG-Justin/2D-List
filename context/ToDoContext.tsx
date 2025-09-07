import {createContext} from "react";
import { ToDo, ToDoData } from "../model/ToDo";

export interface IToDoContext {
    toDo: ToDo[];
    addToDo: (data: ToDoData) => Promise<void>;
    removeToDo: (id: string) => Promise<void>;
    updateToDo: (id: string, updates: Partial<ToDo>) => Promise<void>;
}

export const ToDoContext = createContext<IToDoContext | undefined>(undefined);
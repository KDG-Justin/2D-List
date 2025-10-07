import {createContext} from "react";
import { Category, CategoryData } from "../model/Category";


export interface ICategoryContext {
    categories: Category[];
    addCategory: (data: CategoryData) => Promise<void>;
    removeCategory: (uuid: string) => Promise<void>;
    updateCategory: (uuid: string, updates: Partial<Category>) => Promise<void>;
}

export const CategoryContext = createContext<ICategoryContext | undefined>(undefined);
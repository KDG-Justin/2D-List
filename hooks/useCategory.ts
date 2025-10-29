import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";


export function useCategory(){
    const ctx = useContext(CategoryContext); 
    if (!ctx) throw new Error("The hook 'useCategory' must be used inside a CategoryContextProvider");
    
    return ctx;
}
import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";



export function useToDo() {
  const ctx = useContext(ToDoContext);
  if (!ctx) {
    throw new Error("The hook 'useToDo' must be used inside a ToDoContextProvider");
  }
  return ctx;
}

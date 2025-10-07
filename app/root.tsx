import { CategoryContextProvider } from "../context/CategoryContextProvider";
import { ToDoContextProvider } from "../context/ToDoContextProvider";
import App from "./App";

export function root() {
  return (
    <CategoryContextProvider>
      <ToDoContextProvider>
        <App />
      </ToDoContextProvider>
    </CategoryContextProvider>
  );
}

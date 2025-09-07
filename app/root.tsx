import { ToDoContextProvider } from "../context/ToDoContextProvider";
import App from "./App";


export function root(){
    return (
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  );
}
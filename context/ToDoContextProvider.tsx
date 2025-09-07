import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { ToDoContext } from "./ToDoContext";
import { ToDo, ToDoData } from "../model/ToDo";
import { StatusEnum } from "../model/enums/StatusEnum";



const STORAGE_KEY = "todos"

export function ToDoContextProvider({ children }: { children: React.ReactNode }) {
  const [toDo, setToDo] = useState<ToDo[]>([]);

  // Initial load
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setToDo(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    })();
  }, []);

  const persist = async (newTodos: ToDo[]) => {
    try {
      setToDo(newTodos);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  };

  const addToDo = async (data: ToDoData) => {
    const newTodo: ToDo = {
      uuid: String(uuid.v4()),
      creationDate: new Date(),
      text: data.text,
      status: StatusEnum.pending,
    };
    await persist([...toDo, newTodo]);
  };

  const removeToDo = async (id: string) => {
    const updated = toDo.filter((t) => t.uuid !== id);
    await persist(updated);
  };

  const updateToDo = async (id: string, updates: Partial<ToDo>) => {
    const updated = toDo.map((t) => (t.uuid === id ? { ...t, ...updates } : t));
    await persist(updated);
  };

  return (
    <ToDoContext.Provider value={{ toDo, addToDo, removeToDo, updateToDo }}>
      {children}
    </ToDoContext.Provider>
  );
}
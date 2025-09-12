import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { ToDoContext } from "./ToDoContext";
import { ToDo, ToDoData } from "../model/ToDo";
import { StatusEnum } from "../model/enums/StatusEnum";
import { Priority } from "../model/enums/Priority";



const STORAGE_KEY = "todos"; 

const priorityOrder: Record<Priority, number> = {
  Urgent: 1,
  High: 2,
  Medium: 3,
  Low: 4,
};

const sortTodos = (todos: ToDo[]) => {
  return [...todos].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};

export function ToDoContextProvider({ children }: { children: React.ReactNode }) {
  const [toDo, setToDo] = useState<ToDo[]>([]);

  // Initial load
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: ToDo[] = JSON.parse(saved);
          setToDo(sortTodos(parsed));
        }
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    })();
  }, []);

  const persist = async (newTodos: ToDo[]) => {
    try {
      const sorted = sortTodos(newTodos); 
      setToDo(sorted);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  };

  const addToDo = async (data: ToDoData) => {
    const newTodo: ToDo = {
      uuid: String(uuid.v4()),
      creationDate: new Date(),
      text: data.text,
      priority: data.priority,
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
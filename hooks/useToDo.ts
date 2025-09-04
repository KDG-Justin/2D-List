import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { ToDo, ToDoData } from "../model/ToDo";
import { StatusEnum } from "../model/enums/StatusEnum";



export function useToDo() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const STORAGE_KEY = "todos";

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setTodos(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    })();
  }, []);

  const persist = async (newTodos: ToDo[]) => {
    try {
      setTodos(newTodos);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  };

  // Add a new todo
  const addTodo = async (data: ToDoData) => {
    const newTodo: ToDo = {
      uuid: uuid.v4(),
      creationDate: new Date(),
      text: data.text,
      status: StatusEnum.pending,
    };
    await persist([...todos, newTodo]);
  };

  // Remove a todo by uuid
  const removeTodo = async (uuid: string) => {
    const updated = todos.filter(t => t.uuid !== uuid);
    await persist(updated);
  };

  // Update a todo (partial update)
  const updateTodo = async (uuid: string, updates: Partial<ToDo>) => {
    const updated = todos.map(t =>
      t.uuid === uuid ? { ...t, ...updates } : t
    );
    await persist(updated);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    updateTodo,
  };
}

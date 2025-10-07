import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { Category, CategoryData } from "../model/Category";
import { CategoryContext } from "./CategoryContext";

const STORAGE_KEY = "categories";

const sortCategoryAlphabetically = (categories: Category[]) => {
  return [...categories].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
};

export function CategoryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  // Initial load
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: Category[] = JSON.parse(saved);
          setCategories(sortCategoryAlphabetically(parsed));
        }
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    })();
  }, []);
  

  const persist = async (newCategories: Category[]) => {
    try {
      const sorted = sortCategoryAlphabetically(newCategories);
      setCategories(sorted);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
    } catch (error) {
      console.error("Error saving categories:", error);
    }
  };


  const addCategory = async (data: CategoryData) => {
    const newCategory: Category = {
      uuid: String(uuid.v4()),
      name: data.name,
      toDos: [],
    };
    await persist([...categories, newCategory]);
  };


  const removeCategory = async (uuid: string) => {
    const updated = categories.filter((t) => t.uuid !== uuid);
    await persist(updated);
  };


  const updateCategory = async (uuid: string, updates: Partial<Category>) => {
    setCategories((prevCategories) => {
    const updatedCategories = prevCategories.map((category) => {
      if (category.uuid === uuid) {
        return {
          ...category,
          // Override what is changed
          name: updates.name ?? category.name,
          toDos: updates.toDos ?? category.toDos,
        };
      }
      return category;
    });

    persist(updatedCategories);
    return updatedCategories;
  });
  };



  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, removeCategory, updateCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

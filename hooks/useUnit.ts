import { Unit } from "../model/Unit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export function useUnit() {
  const [units, setUnits] = useState<Unit[]>([]);
  const STORAGE_KEY = "units";

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setUnits(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    })();
  }, []);

  const persist = async (newUnits: Unit[]) => {
    try {
      setUnits(newUnits);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newUnits));
    } catch (error) {
      console.error("Error saving units:", error);
    }
  };
}

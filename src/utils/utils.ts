import { ToDoItem } from "@/app/to-do/page";

// Helper function to transform data from JSON to string and string to JSON
type SaveableData = ToDoItem;

const transformData = (
  data: string | SaveableData[],
  toJson: boolean
): string | SaveableData[] => {
  return toJson
    ? JSON.stringify(data as SaveableData[])
    : JSON.parse(data as string);
};

// Function to save data into localStorage
export const saveToLocalStorage = (key: string, data: SaveableData[]): void => {
  const stringData = transformData(data, true) as string;
  localStorage.setItem(key, stringData);
};

// Function to retrieve data from localStorage
export const getFromLocalStorage = (key: string): SaveableData[] | null => {
  const stringData = localStorage.getItem(key);
  if (stringData) {
    return transformData(stringData, false) as SaveableData[];
  }
  return null;
};

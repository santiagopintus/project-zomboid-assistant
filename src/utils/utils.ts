// Helper function to transform data from JSON to string and string to JSON
const transformData = (data: any, toJson: boolean): any => {
  return toJson ? JSON.stringify(data) : JSON.parse(data);
};

// Function to save data into localStorage
export const saveToLocalStorage = (key: string, data: any): void => {
  const stringData = transformData(data, true);
  localStorage.setItem(key, stringData);
};

// Function to retrieve data from localStorage
export const getFromLocalStorage = (key: string): any => {
  const stringData = localStorage.getItem(key);
  if (stringData) {
    return transformData(stringData, false);
  }
  return null;
};

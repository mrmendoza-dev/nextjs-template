// "use client";

// import { useState, useEffect } from "react";

// const useThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const savedTheme = localStorage.getItem("color-theme");
//     if (savedTheme) {
//       return savedTheme === "dark";
//     }
//     return true;
//   });

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("color-theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("color-theme", "light");
//     }
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return {
//     isDarkMode,
//     toggleTheme,
//   };
// };

// export default useThemeToggle;

// hooks/useLocalStorage.ts
"use client";
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
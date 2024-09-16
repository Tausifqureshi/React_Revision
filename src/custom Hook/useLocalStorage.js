import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) || initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {// Update localStorage Jitne bar Firstname change hoga utne bar localStorage me data change hoga automatically os liye ham is useEffect ka use karte hai.  React ka useEffect hook side-effects ko handle karne ke liye use hota hai, jaise DOM updates, API calls, ya localStorage updates.
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [key, state]);

  return [state, setState];
}

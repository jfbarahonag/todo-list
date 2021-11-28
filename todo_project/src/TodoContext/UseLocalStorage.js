import { useState, useEffect } from "react";

/**
 * custom hook for localStorage
 */
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      /* To simulate a request to a server */
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems = localStorageItem
          ? JSON.parse(localStorageItem)
          : localStorage.setItem(itemName, JSON.stringify(initialValue));

        setItems(parsedItems);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItems = (newItems) => {
    try {
      setItems(newItems);

      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
    } catch (error) {
      setError(true);
    }
  };

  return { items, saveItems, loading, error };
}

export { useLocalStorage }

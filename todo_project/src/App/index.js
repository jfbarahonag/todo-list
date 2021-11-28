import React, { useEffect, useState } from 'react';

import { AppUI } from './AppUI';

const KEY = {
  V1: 'TODOS_V1'
}

/**
 * custom hook for localStorage
*/
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(initialValue);
  
  useEffect(() => {
    setTimeout(() => { /* To simulate a request to a server */
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems = localStorageItem
          ? JSON.parse(localStorageItem)
          : localStorage.setItem(itemName, JSON.stringify(initialValue));

        setItems(parsedItems);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true)
      }
    }, 1000);
  })

  const saveItems = (newItems) => {
    try {
      setItems(newItems);
      
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
    } catch (error) {
      setError(true)
    }
  };

  return { items, saveItems, loading, error }
}

function App() {
  const { items: TODOs, saveItems: saveTODOs, loading, error } = useLocalStorage(KEY.V1, []);
  const [searchValue, setSearchValue] = useState('')

  const completedTODOs = TODOs.filter(todo => !!todo.completed)
  const totalTODOs = TODOs

  const filterTODOs = TODOs.filter(todo => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ))

  const toggleCompleteTODO = text => {
    const TODOIdx = TODOs.findIndex(todo => todo.text === text)

    const newTODOs = [...TODOs]
    newTODOs[TODOIdx].completed = !newTODOs[TODOIdx].completed;
    saveTODOs(newTODOs)
  }

  const deleteTODO = text => {
    const TODOIdx = TODOs.findIndex(todo => todo.text === text)

    const newTODOs = [...TODOs]
    newTODOs.splice(TODOIdx, 1)
    saveTODOs(newTODOs)
  }

  return (
    <AppUI
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      totalTODOs={totalTODOs}
      completedTODOs={completedTODOs}
      filterTODOs={filterTODOs}
      toggleCompleteTODO={toggleCompleteTODO}
      deleteTODO={deleteTODO}
      loading={loading}
      error={error}
    />
  );
}

export default App;

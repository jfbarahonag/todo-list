import React, { useState } from 'react';

import { AppUI } from './AppUI';

const KEY = {
  V1: 'TODOS_V1'
}

/**
 * custom hook for localStorage
*/
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItems = localStorageItem
  ? JSON.parse(localStorageItem)
  : localStorage.setItem(itemName, JSON.stringify(initialValue));
  
  const [items, setItems] = useState(parsedItems || initialValue);
  
  const saveItems = (newItems) => {
    setItems(newItems);
    
    const stringifiedItems = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedItems);
  };

  return [items, saveItems]
}

function App() {
  const [TODOs, saveTODOs] = useLocalStorage(KEY.V1, []);
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
    />
  );
}

export default App;

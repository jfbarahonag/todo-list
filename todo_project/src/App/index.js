import React, { useState } from 'react';

import { AppUI } from './AppUI';

const KEY = {
  V1: 'TODOS_V1'
}

function App() {

  const localStorageTODOs = localStorage.getItem(KEY.V1)
  
  let parsedTODOs = localStorageTODOs
    ? JSON.parse(localStorageTODOs)
    : localStorage.setItem(KEY.V1, JSON.stringify([]));
  
  const [searchValue, setSearchValue] = useState('')
  const [TODOs, setTODOs] = useState(parsedTODOs || [])

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

  const saveTODOs = (newTODOs) => {
    setTODOs(newTODOs)
    
    const stringifiedTODOs = JSON.stringify(newTODOs)
    localStorage.setItem(KEY.V1, stringifiedTODOs)
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

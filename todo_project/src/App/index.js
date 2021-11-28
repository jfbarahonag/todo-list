import React, { useState } from 'react';
//components
import { AppUI } from './AppUI';
//styles

const defaultTODOs = [
  { text: 'Study React', completed: false },
  { text: 'Study Vue', completed: true },
  { text: 'Panic Button [FW]', completed: true },
  { text: 'Vipe\'s web app', completed: false },
  { text: 'Procrastinate', completed: true },
];

function App() {
  const [searchValue, setSearchValue] = useState('')
  //TODO: change to an empty array
  const [TODOs, setTODOs] = useState(defaultTODOs)

  const completedTODOs = TODOs.filter(todo => !!todo.completed)
  const totalTODOs = TODOs

  const filterTODOs = TODOs.filter(todo => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ))

  const toggleCompleteTODO = text => {
    const TODOIdx = TODOs.findIndex(todo => todo.text === text)

    const newTODOs = [...TODOs]
    newTODOs[TODOIdx].completed = !newTODOs[TODOIdx].completed;
    setTODOs(newTODOs)
  }

  const deleteTODO = text => {
    const TODOIdx = TODOs.findIndex(todo => todo.text === text)

    const newTODOs = [...TODOs]
    newTODOs.splice(TODOIdx, 1)
    setTODOs(newTODOs)
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

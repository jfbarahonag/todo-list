import React, { useState } from 'react';
//components
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from "./components/CreateTodoButton";
//styles
import './App.css';

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

  return (
    <div className="app-wrapper">

      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoCounter
        total={totalTODOs.length}
        completed={completedTODOs.length}
      />
      <TodoList>
        {
          filterTODOs.map( todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onToggleComplete={() => {toggleCompleteTODO(todo.text)}}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;

import React from 'react';
//components
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from "./components/CreateTodoButton";
//styles
import './App.css';

const TODOs = [
  { text: 'Study React', completed: false },
  { text: 'Study Vue', completed: true },
  { text: 'Panic Button [FW]', completed: true },
  { text: 'Vipe\'s web app', completed: false },
  { text: 'Vipe\'s web app', completed: false },
  { text: 'Vipe\'s web app', completed: false },
  { text: 'Vipe\'s web app', completed: false },
  { text: 'Vipe\'s web app', completed: false },
  { text: 'Vipe\'s web app', completed: false },
]

function App() {
  return (
    <div className="app-wrapper">

      <TodoSearch />
      <TodoCounter />
      <TodoList>
        {
          TODOs.map( todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}  
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;

// import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from "./components/CreateTodoButton";

const TODOs = [
  { text: 'Study React', completed: false },
  { text: 'Study Vue', completed: true },
  { text: 'Panic Button [FW]', completed: false },
  { text: 'Vipe\'s web app', completed: false },
]

function App() {
  return (
    <React.Fragment> {/*invisible tag*/}
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          TODOs.map( todo => (
            <TodoItem
              key={todo.text}
              text={todo.text} />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

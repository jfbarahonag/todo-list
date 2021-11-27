// import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter'

const TODOs = [
  { text: 'Study React', completed: false },
  { text: 'Study Vue', completed: true },
  { text: 'Panic Button [FW]', completed: false },
]

function App() {
  return (
    <React.Fragment> {/*invisible tag*/}
      <TodoCounter />
      {/* <TodoSearch /> */}
      <input type="text" placeholder="Courses" />
      {/* <TodoList> */}
      {/*
          TODOs.map( todo => (
            todo
          ))
        */ }
      {/* </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;

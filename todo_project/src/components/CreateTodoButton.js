import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    return (
      <section className="create-task">
        <h2 className="create-task__title">Add a new Task</h2>
        <input
          className="create-task__input"
          type="text"
          placeholder="Task name here..."
        />
        
        <button className="create-task__button">
            Create task
        </button>
      </section>
    );
}

export { CreateTodoButton };
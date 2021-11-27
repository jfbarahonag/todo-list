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
          <svg
            style={{ width: '24px', height: "24px" }}
            viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
          </svg>
        </button>
      </section>
    );
}

export { CreateTodoButton };
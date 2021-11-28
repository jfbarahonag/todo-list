import React, { useContext, useState } from "react";
import { TODOContext } from "../../TodoContext";

import './TodoForm.css'

function TodoForm() {
  
  const [newTODOValue, setNewTODOValue] = useState('');

  const {
    addTODO,
    setOpenModal
  } = useContext(TODOContext)

  const onCancel = () => {
    setOpenModal(false)
    console.log("Cancel ok");
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (newTODOValue !== '') {
      addTODO(newTODOValue)
      console.log(`Add ok`)
      setNewTODOValue('')
      setOpenModal(false)
    }
  }
  
  const onTextAreaChange = (e) => {
    setNewTODOValue(e.target.value)
  }

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <label className="todo-form__label">Add a New Task</label>
      <textarea
        className="todo-form__text"
        placeholder="Make false & false = true"
        onChange={onTextAreaChange}
        value={newTODOValue}
      />
      <div className="todo-form__buttons">
        <button
          className="button todo-form__buttons-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="button todo-form__buttons-add"
          type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
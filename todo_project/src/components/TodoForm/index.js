import React, { useContext, useState } from "react";
import { TODOContext } from "../../TodoContext";

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
    if (newTODOValue != '') {
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
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="">...</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Make false & false = true"
        onChange={onTextAreaChange}
        value={newTODOValue}
      />
      <div className="buttons-container">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export { TodoForm };
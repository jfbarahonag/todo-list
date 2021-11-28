import React from "react";
import './TodoItem.css'
import { TodoIcon } from '../TodoIcon'
    
function TodoItem({ completed, text, onToggleComplete, onDelete }) {

  return (
    <li className="todo-item__card">
      <TodoIcon
        type={completed ? "check" : "uncheck"}
        color={completed ? "green" : "red"}
        onClick={onToggleComplete}
      />
      <span
        className={
          completed
            ? "todo-item__card-text-check"
            : "todo-item__card-text-not-check"
        }
      >
        {text}
      </span>
      <TodoIcon
        type="delete"
        onClick = {onDelete}
      />
    </li>
  );
  }

export { TodoItem };
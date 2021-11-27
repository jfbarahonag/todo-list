import React from "react";
import './TodoItem.css'
    
function TodoItem({ completed, text }) {
    return (
      <li className="todo-item__card">
        {completed ? (
          <svg
            className="todo-item__card-check"
            style={{ width: "24px", height: "24px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
            />
          </svg>
        ) : (
          <svg
            className="todo-item__card-not-check"
            style={{ width: "24px", height: "24px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        )}
        <span
          className={
            completed
              ? "todo-item__card-text-check"
              : "todo-item__card-text-not-check"
          }
        >
          {text}
        </span>
        <svg
          className="todo-item__card-trash"
          style={{ width: "24px", height: "24px" }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </svg>
      </li>
    );
    }

export { TodoItem };
import React, { useContext } from "react";

import { TODOContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/Modal";
import Loader from "../components/Loader";

import "./App.css";

function AppUI() {
  const {
    error,
    loading,
    filterTODOs,
    toggleCompleteTODO,
    deleteTODO,
    totalTODOs,
    openModal,
    setOpenModal
  } = useContext(TODOContext);

  return (
    <div className="app-wrapper">
      <TodoSearch />
      <TodoCounter />

      <TodoList>
        {loading && <Loader />}
        {error && <p>ERROR loading content</p>}
        {!loading && !filterTODOs.length && !totalTODOs.length && !error && (
          <p>Add your first Task</p>
        )}
        {!loading && !filterTODOs.length && !!totalTODOs.length && !error && (
          <p>No match found. Search again</p>
        )}
        {filterTODOs.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onToggleComplete={() => {
              toggleCompleteTODO(todo.text);
            }}
            onDelete={() => {
              deleteTODO(todo.text);
            }}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </div>
  );
}

export { AppUI };

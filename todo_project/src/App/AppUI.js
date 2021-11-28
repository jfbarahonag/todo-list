import React from "react";

import { TODOContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

import "./App.css";

function AppUI(
  {
    searchValue,
    setSearchValue,
    totalTODOs,
    completedTODOs,
    filterTODOs,
    toggleCompleteTODO,
    deleteTODO,
    loading,
    error,
    
    }
) {
    return (
      <div className="app-wrapper">
        <TodoSearch />
        <TodoCounter />

        <TODOContext.Consumer>
          {({
            error,
            loading,
            filterTODOs,
            toggleCompleteTODO,
            deleteTODO,
          }) => (
            <TodoList>
              {loading && <p>Loading content</p>}
              {error && <p>ERROR loading content</p>}
              {!loading && !filterTODOs.length && !error && (
                <p>Add your first Task</p>
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
          )}
        </TODOContext.Consumer>

        <CreateTodoButton />
      </div>
    );
}

export { AppUI }

import React from "react";

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
        deleteTODO
    }
) {
    return (
      <div className="app-wrapper">
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        <TodoCounter
          total={totalTODOs.length}
          completed={completedTODOs.length}
        />
        <TodoList>
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
        <CreateTodoButton />
      </div>
    );
}

export { AppUI }

import React, { createContext, useState } from "react";

import { useLocalStorage } from "./UseLocalStorage";

const TODOContext = createContext();

const KEY = {
  V1: "TODOS_V1",
};

function TODOProvider(props) {
  const {
    items: tempTODOs,
    saveItems: saveTODOs,
    loading,
    error,
  } = useLocalStorage(KEY.V1, []);
  
  let TODOs = [] || tempTODOs
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTODOs = TODOs.filter((todo) => !!todo.completed);
  const totalTODOs = TODOs;

  const filterTODOs = TODOs.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleCompleteTODO = (text) => {
    const TODOIdx = TODOs.findIndex((todo) => todo.text === text);

    const newTODOs = [...TODOs];
    newTODOs[TODOIdx].completed = !newTODOs[TODOIdx].completed;
    saveTODOs(newTODOs);
  };

  const deleteTODO = (text) => {
    const TODOIdx = TODOs.findIndex((todo) => todo.text === text);

    const newTODOs = [...TODOs];
    newTODOs.splice(TODOIdx, 1);
    saveTODOs(newTODOs);
  };
  
  const addTODO = (text) => {

    const newTODOs = [...TODOs];
    newTODOs.push({
      completed: false,
      text : text
    })
    saveTODOs(newTODOs);
  };

  return (
    <TODOContext.Provider
      value={{
        searchValue,
        setSearchValue,
        totalTODOs,
        completedTODOs,
        filterTODOs,
        loading,
        error,
        toggleCompleteTODO,
        deleteTODO,
        addTODO,
        openModal,
        setOpenModal
      }}
    >
      {props.children}
    </TODOContext.Provider>
  );
}

export { TODOContext, TODOProvider };

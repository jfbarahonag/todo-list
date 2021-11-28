import React from "react";

import './TodoList.css'

function TodoList({children}) {
    return (
        <section className="todo-list">
            <ul className="todo-list__container">
                {children}
            </ul>
        </section>
    )
}

export { TodoList }

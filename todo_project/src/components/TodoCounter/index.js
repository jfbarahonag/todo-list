import React from 'react'
import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <span className='todo-counter'>
            You have completed {completed || 'm'} of {total || 'n'} tasks
        </span>
    )
}

export { TodoCounter }

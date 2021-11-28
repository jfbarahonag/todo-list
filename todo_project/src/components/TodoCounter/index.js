import React, { useContext } from 'react'

import { TODOContext } from '../../TodoContext'

import './TodoCounter.css'

function TodoCounter() {
    
    const {totalTODOs, completedTODOs} = useContext(TODOContext)

    return (
        <span className='todo-counter'>
            {(!!completedTODOs.length && !!totalTODOs.length) && `You have completed ${completedTODOs.length} of ${totalTODOs.length} tasks`}
            {(!totalTODOs.length) && `There are no tasks registered`}
        </span>
    )
}

export { TodoCounter }

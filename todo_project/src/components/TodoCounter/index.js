import React, { useContext } from 'react'

import { TODOContext } from '../../TodoContext'

import './TodoCounter.css'

function TodoCounter() {
    
    const {totalTODOs, completedTODOs, loading} = useContext(TODOContext)

    return (
        <span className='todo-counter'>
            {(completedTODOs.length !== 0 || totalTODOs.length !== 0) && `You have completed ${completedTODOs.length} of ${totalTODOs.length} tasks`}
            {(totalTODOs.length === 0 && !loading) && `There are no tasks registered`}
            {(!!loading) && `Tasks are being loaded`}
        </span>
    )
}

export { TodoCounter }

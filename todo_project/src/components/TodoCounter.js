import React from 'react'
import './TodoCounter.css'

const styles = {
    color: 'red',
    backgroundColor: 'green'
}

function TodoCounter() {
    return (
        <h2 style={ styles }
        >
            You have completed 2 of 3 TODOs
        </h2>
    )
}

export { TodoCounter }

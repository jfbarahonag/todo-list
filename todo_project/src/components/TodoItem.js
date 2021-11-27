function TodoItem({text}) {
    return (
        <li>
            <input type="checkbox" />
            <span>{text}</span>
        </li>
    )
}

export { TodoItem };
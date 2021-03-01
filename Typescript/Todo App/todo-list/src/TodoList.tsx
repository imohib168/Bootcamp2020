import React, { FC } from 'react';
import './TodoList.css'

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

const TodoList: FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label className={todo.complete ? 'complete' : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
                {todo.text}
            </label>
        </li>
    )
}

export default TodoList;

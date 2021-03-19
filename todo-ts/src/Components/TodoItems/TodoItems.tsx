import React from 'react';
import { TodoItemsProps, TodoArrayType } from './../../Types';
import './TodoItem.css';
export const TodoItems: React.FC<TodoItemsProps> = ({ Todos, DeleteTodo, completeTodo }) => {

    return (
        <ul className="todoItems">
            {Todos.map((todo: TodoArrayType) => (
                <li
                    key={todo.id}
                >
                    <span
                        className={todo.isCompleted ? 'completed' : 'todoItem'}
                    >
                        {todo.text}
                    </span>
                    <div className="btnsContainer">
                        <button
                            onClick={() => DeleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => completeTodo(todo.id)}
                        >
                            {todo.isCompleted ? (
                                <span>Undo</span>
                            ) : (
                                <span>Complete</span>
                            )}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
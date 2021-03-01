import React from 'react'
import TodoList from './TodoList';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

const TodoListItems: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoList key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoListItems;

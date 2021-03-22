import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';
import TodoList from './todoList';

const initialTodos: Array<Todo> = [
    { text: "Prayer", complete: true },
    { text: "Breakfast", complete: false },
]

const App = () => {

    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const addTodo = (newTodo: string) => {
        newTodo.trim() !== "" &&
            setTodos([...todos, { text: newTodo, complete: false }])
    }

    return (
        <>
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </>
    )
}

export default App;

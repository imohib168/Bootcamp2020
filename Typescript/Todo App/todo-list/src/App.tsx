import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoListItems from './TodoListItems';

const initialTodos: Array<Todo> = [];

const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodo = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    })
    setTodos(newTodo);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <>
      <TodoListItems todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;

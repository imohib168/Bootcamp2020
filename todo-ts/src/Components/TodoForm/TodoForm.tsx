import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { TodoArrayType } from './../../Types';
import { TodoItems } from './../TodoItems/TodoItems';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';

export const TodoForm: React.FC = () => {

    const [todoText, setTodoText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const initialState: TodoArrayType[] = JSON.parse(localStorage.getItem('todos') || '[]');
    // [
    //     {
    //         id: '55',
    //         text: 'Mohib Ismail',
    //         isCompleted: false
    //     },
    //     {
    //         id: '345',
    //         text: 'todoText',
    //         isCompleted: false
    //     }
    // ];
    const [todo, setTodo] = useState<Array<TodoArrayType>>(initialState);


    useEffect(() => {
        if (null !== inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const AddTodoObj = {
        id: uuidv4(),
        text: todoText,
        isCompleted: false
    }

    const AddTodo = (Obj: any) => {
        if (!Obj.text || /^\s*$/.test(Obj.text)) {
            return;
        }

        setTodo([...todo, Obj])

        setTodoText('');

        const todos = [...todo, Obj];
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const DeleteTodo = (id: string) => {
        const removedTodo = [...todo].filter(todo => id !== todo.id)
        setTodo(removedTodo);

        localStorage.setItem('todos', JSON.stringify(removedTodo));
    }


    const completeTodo = (id: string) => {
        let updatedTodo = todo.map((todo: TodoArrayType) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        })
        setTodo(updatedTodo);

        localStorage.setItem('todos', JSON.stringify(updatedTodo));
    }

    return (
        <main className="formContainer">
            <h2>Hey.! What's up for Today?</h2>
            <form className="todoForm" onSubmit={(e: FormEvent) => (e.preventDefault())}>
                <input
                    className="TodoInput"
                    type="text"
                    placeholder="To-do Item..."
                    value={todoText}
                    onChange={(event) => setTodoText(event.target.value)}
                    ref={inputRef}
                />

                <button
                    className="btn"
                    onClick={() => AddTodo(AddTodoObj)}
                >
                    Add To-do
                </button>
            </form>
            <TodoItems Todos={todo} DeleteTodo={DeleteTodo} completeTodo={completeTodo} />
        </main>

    )
}

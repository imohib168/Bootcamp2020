import React, { useState } from 'react'
import { FormEvent } from 'react';
import { ChangeEvent } from 'react';

interface AddTodoForm {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoForm> = ({ addTodo }) => {

    const [input, setInput] = useState("");

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    }
    return (
        <form>
            <input
                type="text"
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default AddTodoForm;
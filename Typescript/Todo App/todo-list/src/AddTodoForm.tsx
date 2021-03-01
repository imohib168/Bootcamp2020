import React, { useState, ChangeEvent } from 'react'
import { FormEvent } from 'react';

interface AddTodoFromProps {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFromProps> = ({ addTodo }) => {

    const [input, setInput] = useState("");

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(input)

        setInput("");
    }

    return (
        <form>
            <input type="text" value={input} onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default AddTodoForm;
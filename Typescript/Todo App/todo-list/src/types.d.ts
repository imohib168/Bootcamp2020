type Todo = {
    text: string,
    complete: boolean,
}

type ToggleTodo = (selected: Todo) => void;

type AddTodo = (newTodo: string) => void;
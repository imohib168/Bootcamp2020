export interface TodoArrayType {
    id: string,
    text: string,
    isCompleted: boolean
};

export interface TodoItemsProps {
    Todos: TodoArrayType[],
    DeleteTodo: (id: string) => void;
    completeTodo: (id: string) => void;
}
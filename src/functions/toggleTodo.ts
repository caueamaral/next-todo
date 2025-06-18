import { useTodoStore } from '../store/useTodoStore'

export const toggleTodo = (id: string) => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)

    setTodos(
        todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    )
}
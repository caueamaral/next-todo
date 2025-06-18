import { useTodoStore } from '../store/useTodoStore'

export const useDeleteTodo = () => {
    const todos = useTodoStore(store => store.todos)
    const setTodos = useTodoStore(store => store.setTodos)
    
    const deleteTodo = (id: number) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    return { deleteTodo }
}
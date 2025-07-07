import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps'

export const useDeleteTodo = () => {
    const todos = useTodoStore(store => store.todos)
    const setTodos = useTodoStore(store => store.setTodos)
    
    const deleteTodo = (id: number) => {
        const newTodos:TodoProps[] = todos.filter(todo => todo.id !== id)

        setTodos(newTodos)
        sessionStorage.setItem('todos', JSON.stringify([...newTodos]))
    }

    return { deleteTodo }
}
import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps' 

export const deleteTodo = (id: string) => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)
    const setInput = useTodoStore(state => state.setInput)

    setTodos(
        todos.filter(todo => todo.id !== id)
    )
}
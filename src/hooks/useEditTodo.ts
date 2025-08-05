import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps'

export const useEditTodo = () => {
    const todos = useTodoStore(store => store.todos)
    const setTodos = useTodoStore(store => store.setTodos)

    const editTodo = (id: string, text: string) => {
        const newTodos:TodoProps[] = todos.map((todo:TodoProps) => {
            if (todo.id === id) todo.text = text

            return todo
        })

        setTodos(newTodos)
        sessionStorage.setItem('todos', JSON.stringify([...newTodos]))
    }

    return { editTodo }
}
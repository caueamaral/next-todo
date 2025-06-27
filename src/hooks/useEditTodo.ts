import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps'

export const useEditTodo = () => {
    const todos = useTodoStore(store => store.todos)
    const setTodos = useTodoStore(store => store.setTodos)

    const editTodo = (id: number, text: string) => {
        const editedTodo = todos.map((todo:TodoProps) => {
            if (todo.id === id) todo.text = text

            return todo
        })

        setTodos(editedTodo)
    }

    return { editTodo }
}
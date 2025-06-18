'use client'

import { useTodoStore } from '../store/useTodoStore'

export const useToggleTodo = () => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
    }

    return { toggleTodo }
}
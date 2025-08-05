'use client'

import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps'

export const useToggleTodo = () => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)

    const toggleTodo = (id: string) => {
        const newTodos:TodoProps[] = todos.map((todo:TodoProps) => {
            if (todo.id === id) todo.completed = !todo.completed

            return todo
        })

        setTodos(newTodos)
        sessionStorage.setItem('todos', JSON.stringify([...newTodos]))
    }

    return { toggleTodo }
}
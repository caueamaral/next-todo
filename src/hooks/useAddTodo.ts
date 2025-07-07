'use client'

import { useEffect } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { generateId } from '../functions/generateId'
import { TodoProps } from '../interfaces/TodoProps' 
import { getTodos } from '../functions/getTodos'

export const useAddTodo = () => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)
    const setInput = useTodoStore(state => state.setInput)

    useEffect(() => {
        const storedTodos:TodoProps[] = getTodos()
        setTodos([...storedTodos])
    }, [])

    const addTodo = (text: string) => {
        const trimmedText = text.trim()

        if (!trimmedText) return
        
        const newTodo: TodoProps = {
            id: generateId(),
            text: trimmedText,
            completed: false
        }

        setTodos([...todos, newTodo])
        setInput('')

        const storedTodos:TodoProps[] = getTodos()

        sessionStorage.setItem('todos', JSON.stringify([
            ...storedTodos,
            newTodo
        ]))
    }

    return { addTodo }
}
'use client'

import { useEffect } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { generateId } from '../functions/generateId'
import { TodoProps } from '../interfaces/TodoProps' 

export const useAddTodo = () => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)
    const setInput = useTodoStore(state => state.setInput)

    useEffect(() => {
        if (!sessionStorage.getItem('todos')) {
            sessionStorage.setItem('todos', JSON.stringify([]))
        }

        const storedTodos = sessionStorage.getItem('todos')
        const parsedTodos:TodoProps[] = storedTodos ? JSON.parse(storedTodos) : []

        setTodos(parsedTodos)
    }, [setTodos])

    const addTodo = (text: string) => {
        const trimmedText = text.trim()

        if (!trimmedText) return
        
        const newTodo:TodoProps = {
            id: generateId(),
            text: trimmedText,
            completed: false
        }

        setTodos([...todos, newTodo])
        setInput('')

        sessionStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    }

    return { addTodo }
}
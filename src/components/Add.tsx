import { useEffect, useRef } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { useAddTodo } from '../hooks/useAddTodo'

export default function Add() {
    const todos = useTodoStore(state => state.todos)
    const input = useTodoStore(state => state.input)
    const setInput = useTodoStore(state => state.setInput)

    const { addTodo } = useAddTodo()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [todos])

    return (
        <div className="flex">
            <input
                type="text"
                arial-label="New todo"
                placeholder="Add Todo"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTodo(input)}
                className="border border-gray-300 flex-grow py-1 px-2"
            />
            <button
                aria-label="Add todo"
                className="bg-blue-500 text-white px-4 rounded-r-md cursor-pointer hover:bg-blue-400"
                onClick={() => addTodo(input)}
            >
                Add
            </button>
        </div>
    )
}
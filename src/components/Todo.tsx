import { useEffect, useRef, useState } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { useAddTodo } from '../hooks/useAddTodo'
import { TodoProps } from '../interfaces/TodoProps'
import Header from '../components/Header'
import TodoItem from '../components/TodoItem'
import Footer from '../components/Footer'
import Dialog from '../components/Dialog'

export default function Todo() {
    const input = useTodoStore(state => state.input)
    const setInput = useTodoStore(state => state.setInput)
    const todos = useTodoStore(state => state.todos)

    const { addTodo } = useAddTodo()

    const [selectedTodoId] = useState<number | null>(null)

    const inputRef = useRef<HTMLInputElement>(null)
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [todos])

    return (
        <>
            <article className="bg-white mt-10 max-w-md mx-auto p-7 rounded-md shadow-lg">
                <Header />
                <main>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Add Todo"
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addTodo(input)}
                            className="border border-gray-300 flex-grow py-1 px-2"
                        />
                        <button
                            onClick={() => addTodo(input)}
                            className="bg-blue-500 text-white px-4 rounded-r-md cursor-pointer hover:bg-blue-400"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="divide-y divide-gray-300 mt-4">
                        {todos.map((todo:TodoProps) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
                    </ul>
                </main>
                <Footer />
            </article>
            <Dialog />
        </>
    )
}
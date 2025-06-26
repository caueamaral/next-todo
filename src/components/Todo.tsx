import { useEffect, useRef, useState } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { useAddTodo } from '../hooks/useAddTodo'
import { useDeleteTodo } from '../hooks/useDeleteTodo'
import { TodoProps } from '../interfaces/TodoProps'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TodoItem from '../components/TodoItem'

export default function Todo() {
    const input = useTodoStore(state => state.input)
    const setInput = useTodoStore(state => state.setInput)
    const todos = useTodoStore(state => state.todos)

    const { addTodo } = useAddTodo()
    const { deleteTodo } = useDeleteTodo()

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
            <dialog ref={dialogRef}>
                <form method="dialog" className="bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-7 w-96">
                    <header className="flex items-center justify-between">
                        <h2 className="font-bold text-xl">
                            Delete
                        </h2>
                        <button className="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </header>
                    <p className="mt-6">
                        Are you sure you want to delete it?
                        <br />
                        This action can't be undone.
                    </p>
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            value="cancel"
                            className="cursor-pointer bg-gray-100 py-2 px-4 rounded"
                        >
                            No
                        </button>
                        <button
                            value="ok"
                            onClick={() => {
                                if (selectedTodoId !== null) {
                                    deleteTodo(selectedTodoId)
                                }
                            }}
                            className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Yes, delete!
                        </button>
                    </div>
                </form>
           </dialog>
        </>
    )
}
import { useEffect, useRef, useState } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { useAddTodo } from '../hooks/useAddTodo'
import { useDeleteTodo } from '../hooks/useDeleteTodo'
import { useToggleTodo } from '../hooks/useToggleTodo'
import { TodoProps } from '../interfaces/TodoProps'

export default function Todo() {
    const input = useTodoStore(state => state.input)
    const setInput = useTodoStore(state => state.setInput)
    const todos = useTodoStore(state => state.todos)
    
    const { addTodo } = useAddTodo()
    const { deleteTodo } = useDeleteTodo()
    const { toggleTodo } = useToggleTodo()

    const inputRef = useRef<HTMLInputElement>(null)
    const dialogRef = useRef<HTMLDialogElement>(null)

    const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null)

    const handleDialogDeleteTodo = (id: number) => {
        setSelectedTodoId(id)
        dialogRef?.current?.showModal()
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <>
            <article className="bg-white mt-10 max-w-md mx-auto p-7 rounded-md shadow-lg">
                <header>
                    <h1 className="text-center font-bold text-2xl mb-5">
                        Todo List
                    </h1>
                </header>
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
                            <li
                                key={todo.id}
                                className="flex items-center justify-between p-2 hover:bg-gray-50"
                            >
                                <div className="flex flex-grow items-center">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleTodo(todo.id)}
                                        className="form-checkbox text-blue-500"
                                    />
                                    <span
                                        className={
                                            todo.completed
                                                ? 'flex-grow mx-2 w-72 line-through text-gray-400'
                                                : 'flex-grow mx-2 w-72'
                                        }
                                        style={{
                                            lineHeight: '1.1em',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {todo.text}
                                    </span>
                                    <button
                                        className="cursor-pointer text-gray-500"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleDialogDeleteTodo(todo.id)}
                                        className="cursor-pointer ml-3 text-red-500 hover:text-red-700"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
                {todos.length == 0 && (
                    <footer>
                        <p className="text-center text-gray-500 mt-4 text-sm">
                            No todos yet. Add some todos. 
                        </p>
                    </footer>
                )}
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
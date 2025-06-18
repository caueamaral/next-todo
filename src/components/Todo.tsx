import { useEffect, useRef } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { useAddTodo } from '../hooks/useAddTodo'
import { useToggleTodo } from '../hooks/useToggleTodo'
import { TodoProps } from '../interfaces/TodoProps'

export default function Todo() {
    const input = useTodoStore(state => state.input)
    const setInput = useTodoStore(state => state.setInput)
    const todos = useTodoStore(state => state.todos)
    
    const { addTodo } = useAddTodo()
    const { toggleTodo } = useToggleTodo()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <article className="bg-white mt-10 max-w-md mx-auto p-5 rounded-md shadow-lg">
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
                                    className="mr-2 form-checkbox text-blue-500"
                                />
                                <span className={todo.completed ? 'flex-grow line-through text-gray-400' : 'flex-grow' }>
                                    {todo.text}
                                </span>
                                <button className="cursor-pointer text-red-500 hover:text-red-700">
                                    x
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
    )
}
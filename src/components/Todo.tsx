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

    return (
        <section className="bg-white mt-10 max-w-sm mx-auto p-5 rounded-md shadow-lg">
            <h1 className="text-center font-bold text-2xl mb-5">
                Todo List
            </h1>
            <div className="flex">
                <input
                    type="text"
                    placeholder="Add Todo"
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
                        className=""
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="mr-2 form-checkbox text-blue-500"
                            />
                            <span>
                                {todo.text}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            {todos.length == 0 && (
                <p className="text-center text-gray-500 mt-4 text-sm">
                    No todos yet. Add some todos. 
                </p>
            )}
        </section>
    )
}
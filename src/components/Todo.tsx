import { useTodoStore } from '../store/useTodoStore'
import { useAddTodo } from '../hooks/useAddTodo'
import { TodoProps } from '../interfaces/TodoProps'

export default function Todo() {
    const input = useTodoStore(state => state.input)
    const setInput = useTodoStore(state => state.setInput)
    const todos = useTodoStore(state => state.todos)
    const { addTodo } = useAddTodo()

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
            <ul>
                {todos.map((todo:TodoProps) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </section>
    )
}
import { useTodoStore } from '../store/useTodoStore'
import { addTodo } from '../functions/addTodo'

export default function Todo() {
    const input = useTodoStore((state) => state.input)
    const setInput = useTodoStore((state) => state.setInput)

    return (
        <section className="bg-white mt-10 max-w-sm mx-auto p-5 rounded-md shadow-lg">
            <h1 className="text-center font-bold text-2xl mb-5">
                Todo List
            </h1>
            <form className="flex">
                <input
                    type="text"
                    placeholder="Add Todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo(input)}
                    className="border border-gray-300 flex-grow py-1 px-2"
                />
                <button
                    className="bg-blue-500 text-white px-4 rounded-r-md cursor-pointer hover:bg-blue-400"
                >
                    Add
                </button>
            </form>
        </section>
    )
}
import { useTodoStore } from '../store/useTodoStore'
import { addTodo } from '../functions/addTodo'

export default function Todo() {
    const input = useTodoStore((state) => state.input)
    const setInput = useTodoStore((state) => state.setInput)

    return (
        <section className="bg-white mt-10 max-w-sm mx-auto p-3 rounded-md shadow-lg">
            <h1 className="text-center font-bold text-2xl m">
                Todo List
            </h1>
            <input
                type="text"
                placeholder="Add Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTodo(input)}
            />
        </section>
    )
}
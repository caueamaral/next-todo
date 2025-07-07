import { TodoProps } from '../interfaces/TodoProps'
import { useTodoStore } from '../store/useTodoStore'
import Header from '../components/Header'
import Add from '../components/Add'
import TodoItem from '../components/TodoItem'
import Footer from '../components/Footer'
import Dialog from '../components/Dialog'

export default function Todo() {
    const todos = useTodoStore(state => state.todos)

    return (
        <>
            <article className="bg-white mt-10 max-w-md mx-auto p-7 rounded-md shadow-lg">
                <Header />
                <main>
                    <Add />
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
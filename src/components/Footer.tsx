import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps'

export default function Footer() {
    const todos:TodoProps[] = useTodoStore(store => store.todos)

    return (
        todos.length == 0 && (
            <footer>
                <p className="text-center text-gray-500 mt-4 text-sm">
                    No todos yet. Add some todos. 
                </p>
            </footer>
        )
    )
}
import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps' 
import { generateId } from './generateId'

export const addTodo = (text: string) => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)
    const setInput = useTodoStore(state => state.setInput)
    const trimmedText = text.trim()
    
    if (trimmedText) {
        const newTodo: TodoProps = {
            id: generateId(),
            text: trimmedText,
            completed: false
        }

        setTodos([...todos, newTodo])
        setInput('')
    }
}

export const deleteTodo = (id: string) => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)
    const setInput = useTodoStore(state => state.setInput)

    setTodos(
        todos.filter(todo => todo.id !== id)
    )
}

export const toggleTodo = (id: string) => {
    const todos = useTodoStore(state => state.todos)
    const setTodos = useTodoStore(state => state.setTodos)
    const setInput = useTodoStore(state => state.setInput)

    setTodos(
        todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    )
}
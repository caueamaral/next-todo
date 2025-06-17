import { TodoProps } from '../interfaces/TodoProps' 
import { generateId } from './generateId'

export const addTodo = (text: string) => {
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
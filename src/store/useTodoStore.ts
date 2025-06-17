import { create } from 'zustand'
import { TodoProps } from '../interfaces/TodoProps'

type TodoState = {
    todos: TodoProps[]
    input: string
    setTodos: (todos: TodoProps[]) => void
    setInput: (value: string) => void
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    input: '',
    setTodos: (todos) => set({ todos }),
    setInput: (value) => set({ input: value }),
}))
import { create } from 'zustand'
import { TodoProps } from '../interfaces/TodoProps'

type TodoState = {
    todos: TodoProps[]
    input: string,
    selectedId: number,
    setTodos: (todos: TodoProps[]) => void
    setInput: (value: string) => void
    setSelectedId: (id: number) => void
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    input: '',
    selectedId: 0,
    setTodos: (todos) => set({ todos }),
    setInput: (value) => set({ input: value }),
    setSelectedId: (id) => set({ selectedId: id })
}))
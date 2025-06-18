'use client'

import { useTodoStore } from '../store/useTodoStore'
import Todo from '../components/Todo'

export default function Home() {
  const todos = useTodoStore((state) => state.todos)
  const input = useTodoStore((state) => state.input)

  return (
    <main className="mx-3">
      <Todo />
    </main>
  )
}
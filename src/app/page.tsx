'use client'

import { useTodoStore } from '../store/useTodoStore'

export default function Home() {
  const todos = useTodoStore((state) => state.todos)
  const input = useTodoStore((state) => state.input)

  return <h1>Home</h1>
}
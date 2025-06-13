'use client'

import { useState } from 'react'
import { TodoProps } from '../interfaces/TodoProps'

export default function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [input, setInput] = useState<string>('')

  return <h1>Home</h1>
}
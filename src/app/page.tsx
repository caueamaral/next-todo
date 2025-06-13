'use client'

import { useState } from 'react'
import { TodoProps } from '../interfaces/TodoProps'

export default function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [input, setInput] = useState<string>('')

  // const generateId = (): string => {
  //   return Math.random().toString().substring(2, 10)
  // }

  return <h1>Home</h1>
}
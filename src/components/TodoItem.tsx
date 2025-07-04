import { useEffect, useState, useRef } from 'react'
import { useTodoStore } from '../store/useTodoStore'
import { TodoProps } from '../interfaces/TodoProps'
import { useToggleTodo } from '../hooks/useToggleTodo'
import { useEditTodo } from '../hooks/useEditTodo'

export default function TodoItem({ todo }: { todo:TodoProps }) {
    const { toggleTodo } = useToggleTodo()
    const { editTodo } = useEditTodo()
    
    const setSelectedId = useTodoStore(state => state.setSelectedId)
    
    const dialogRef = useRef<HTMLDialogElement>(null)
    const inputEditRef = useRef<HTMLInputElement>(null)

    const [editInput, setEditInput] = useState<string>('')
    const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        if (isEditing && inputEditRef.current) {
            inputEditRef.current.focus()
        }
    }, [isEditing])

    const handleDialogDelete = (id: number) => {
        setSelectedId(id)
        dialogRef?.current?.showModal()
    }

    const handleEdit = () => {
        setEditInput(todo.text)
        setIsEditing(true)
    }
    
    const handleSave = (id: number, text: string) => {
        editTodo(id, text)
        setIsEditing(false)
    }

    return (
        <li
            key={todo.id}
            className="flex items-center justify-between p-2 hover:bg-gray-50"
        >
            <div className="flex flex-grow items-center">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            aria-label={`Edit todo: ${todo.text}`}
                            className="border border-solid border-gray-300 mr-2 px-2 flex-grow"
                            value={editInput}
                            ref={inputEditRef}
                            onChange={(e) => setEditInput(e.target.value)}
                            onKeyDown={(e) => e.key == 'Enter' && handleSave(todo.id, editInput)}
                        />
                        <button
                            arial-label="Confirm edit todo"
                            className="cursor-pointer text-green-600"
                            onClick={() => handleSave(todo.id, editInput)}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </button>
                        <button
                            arial-label="Cancel edit todo"
                            className="cursor-pointer text-red-500 ml-3"
                            onClick={() => setIsEditing(false)}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="checkbox"
                            aria-label={`Mark todo as ${todo.completed ? 'incomplete' : 'complete'}`}
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="form-checkbox text-blue-500"
                        />
                        <span
                            className={
                                todo.completed
                                    ? 'flex-grow mx-2 w-72 line-through text-gray-400'
                                    : 'flex-grow mx-2 w-72'
                            }
                            style={{
                                lineHeight: '1.1em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            arial-label="Edit todo"
                            className="cursor-pointer text-gray-500"
                            onClick={() => handleEdit()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                        <button
                            arial-label="Delete todo"
                            className="cursor-pointer ml-3 text-red-500"
                            onClick={() => handleDialogDelete(todo.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        </li>
    )
}
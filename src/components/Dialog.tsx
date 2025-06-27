import { useEffect, useState } from 'react'
import { useDeleteTodo } from '../hooks/useDeleteTodo'

export default function Dialog() {
    const [selectedTodoId] = useState<number | null>(null)
    const { deleteTodo } = useDeleteTodo()

    return (
        <dialog>
                <form method="dialog" className="bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-7 w-96">
                    <header className="flex items-center justify-between">
                        <h2 className="font-bold text-xl">
                            Delete
                        </h2>
                        <button className="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </header>
                    <p className="mt-6">
                        Are you sure you want to delete it?
                        <br />
                        This action can't be undone.
                    </p>
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            value="cancel"
                            className="cursor-pointer bg-gray-100 py-2 px-4 rounded"
                        >
                            No
                        </button>
                        <button
                            value="ok"
                            onClick={() => {
                                if (selectedTodoId !== null) {
                                    deleteTodo(selectedTodoId)
                                }
                            }}
                            className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Yes, delete!
                        </button>
                    </div>
                </form>
            </dialog>
    )
}
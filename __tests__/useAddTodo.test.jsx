import { renderHook, act } from '@testing-library/react'
import { useTodoStore } from '../src/store/useTodoStore'
import { useAddTodo } from '../src/hooks/useAddTodo'

describe('useAddTodo', () => {
    it('should add a task in todo', () => {
        const { result: addTodoResult } = renderHook(() => useAddTodo())

        act(() => {
            addTodoResult.current.addTodo('Test')
        })

        const { result: todosResult } = renderHook(() =>
            useTodoStore(state => state.todos)
        )

        expect(todosResult.current).toEqual([
            expect.objectContaining({
                id: expect.any(Number),
                text: 'Test',
                completed: false,
            })
        ])
    })
})
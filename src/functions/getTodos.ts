export const getTodos = () => {
    if (!sessionStorage.getItem('todos')) {
        sessionStorage.setItem('todos', JSON.stringify([]))
    }

    const storedTodos = sessionStorage.getItem('todos')

    return storedTodos
        ? JSON.parse(storedTodos)
        : []
}
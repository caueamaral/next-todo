export const generateId = (): number => {
    return Number(Math.random().toString().substring(2, 10))
}
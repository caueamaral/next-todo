export const generateId = (): string => {
    return Math.random().toString().substring(2, 10)
}
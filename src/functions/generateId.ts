export const generateId = (): string => {
    const randomNumber = Math.random()
    const generatedId = randomNumber.toString().slice(-8)

    return generatedId
}
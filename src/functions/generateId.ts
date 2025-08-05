export const generateId = (): number => {
    const randomNumber = Math.random()
    const randomAsString = randomNumber.toString()
    const randomEdited = randomAsString.substring(1, 1).replace('0', '1') + randomAsString.substring(2, 10)
    const generatedId = Number(randomEdited)

    return generatedId
}
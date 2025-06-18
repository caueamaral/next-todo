import { generateId } from '../src/functions/generateId'

describe('generateId', () => {
    const generatedId = generateId()

    it('should return a number', () => {
        expect(typeof generatedId).toBe('number')
    })

    it('should have 8 caracteres', () => {
        expect(generatedId.toString()).toHaveLength(8)
    })
})
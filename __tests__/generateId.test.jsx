import { generateId } from '../src/functions/generateId'

describe('generateId', () => {
    const generatedId = generateId()

    it('should return a string', () => {
        expect(typeof generatedId).toBe('string')
    })

    it('should have 8 caracteres', () => {
        expect(generatedId).toHaveLength(8)
    })
})
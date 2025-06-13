import { generateId } from '../src/functions/generateId'

describe('generateId', () => {
    const generatedId = generateId()

    it('should return a string', () => {
        expect(typeof generatedId).toBe('string')
    })

    it('return return a string of length 8', () => {
        expect(generatedId).toHaveLength(8)
    })
})
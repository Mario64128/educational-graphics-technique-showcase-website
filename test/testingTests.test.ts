import { expect, test } from 'vitest'
import {makeGuess} from '../src/App.tsx'

test('Make a guess (likely fails)', () => {
    expect(makeGuess(true)).toBe(4)
})

test('Don\'t guess and safely pick 0', () => {
    expect(makeGuess(false)).toBe(0)
})
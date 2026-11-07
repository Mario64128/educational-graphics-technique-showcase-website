export function makeGuess(guess: boolean): number {
  if (guess) return Math.random() * 100;

  return 0;
}

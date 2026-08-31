import { coinChange } from '.';

describe('322. Coin Change', () => {
  test('Example 1', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  test('Example 2', () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  test('Example 3', () => {
    expect(coinChange([1], 0)).toBe(0);
  });

  test('Multiple combinations, minimal count', () => {
    expect(coinChange([1, 3, 4], 6)).toBe(2); // 3 + 3
  });

  test('Large amount with small coins', () => {
    expect(coinChange([1, 2, 5], 100)).toBe(20);
  });

  test('Impossible case', () => {
    expect(coinChange([5, 10], 3)).toBe(-1);
  });
});

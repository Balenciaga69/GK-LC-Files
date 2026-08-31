// maxProfitII.test.ts
import { maxProfit } from '.';

describe('Best Time to Buy and Sell Stock II', () => {
  test('範例 1: 波動上升下降', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  test('範例 2: 連續上升', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test('範例 3: 持續下跌', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('只有一個元素', () => {
    expect(maxProfit([5])).toBe(0);
  });

  test('部分上升', () => {
    expect(maxProfit([2, 4, 1, 7])).toBe(8);
  });

  test('重複價格', () => {
    expect(maxProfit([3, 3, 3, 3])).toBe(0);
  });

  test('多次波動', () => {
    expect(maxProfit([1, 2, 3, 4, 3, 5, 0, 5])).toBe(10);
  });
});

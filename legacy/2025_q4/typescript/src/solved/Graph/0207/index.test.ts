import { canFinish } from '.';

describe('207. Course Schedule', () => {
  test('should return true for possible schedule', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  test('should return false for cyclic dependency', () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  test('should return true for independent courses', () => {
    expect(canFinish(3, [])).toBe(true);
  });

  test('should handle larger acyclic graph', () => {
    expect(canFinish(4, [[1, 0], [2, 1], [3, 2]])).toBe(true);
  });
});

import { longestCommonSubsequence } from './index';

describe('1143. Longest Common Subsequence', () => {
    it('範例1', () => {
        expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    });
    it('範例2', () => {
        expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
    });
    it('範例3', () => {
        expect(longestCommonSubsequence('abc', 'def')).toBe(0);
    });
    it('空字串', () => {
        expect(longestCommonSubsequence('', '')).toBe(0);
    });
});

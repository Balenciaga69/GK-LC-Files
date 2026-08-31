import { longestPalindromeSubseq } from './index';

describe('516. Longest Palindromic Subsequence', () => {
    it('範例1', () => {
        expect(longestPalindromeSubseq('bbbab')).toBe(4);
    });
    it('範例2', () => {
        expect(longestPalindromeSubseq('cbbd')).toBe(2);
    });
    it('單一字元', () => {
        expect(longestPalindromeSubseq('a')).toBe(1);
    });
    it('空字串', () => {
        expect(longestPalindromeSubseq('')).toBe(0);
    });
});

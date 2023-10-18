/**
 * LEETCODE PROBLEM: 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    let result = '';

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (char !== strs[j][i]) {
                return result;
            }
        }

        result += char;
    }

    return result;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
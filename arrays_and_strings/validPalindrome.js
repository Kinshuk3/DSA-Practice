/**
 * LEETCODE PROBLEM: 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    // check if newSTr is same in reverese
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }

    return s === reversed
};

var isPalindrome2 = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    // check if newSTr is same in reverese
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
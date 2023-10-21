/**
 * LEETCODE PROBLEM: 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let sPtr = 0
    let tPtr = 0

    if(s.length === 0 && t.length === 0){
        return true
    }
    for(let i = 0; i < t.length; i++){
        if(s[sPtr] === t[tPtr]){
            sPtr++;
        }
        if(sPtr === s.length){
            return true
        }
        tPtr++
    }
    return false
};

console.log(isSubsequence("axc", "ahbgdc"))
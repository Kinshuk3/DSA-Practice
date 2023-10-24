/**
 * LEETCODE PROBLEM: 151. Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
// time and space complexity: O(n)
var reverseWords = function(s) {
    
    // remove leading and trailing spaces 
    const trimmedStr = s.trim()

    const strArr = trimmedStr.split(/\s+/g)
    let reversedArr = []
    // reverse the array and insert into a string adding a leading space after every operation.
    for(let i = strArr.length - 1; i >= 0; i--){
        reversedArr.push(strArr[i])
    }
    
    const reversedStr = reversedArr.join(" ")
    return reversedStr
};

console.log(reverseWords("  is    blue  "))
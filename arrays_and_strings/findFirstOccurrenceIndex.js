/**
 * LEETCODE PROBLEM: 28. Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    
    // start from beginning
    for(let i = 0; i < haystack.length; i++){
        let count = 0;
        for(let j = 0; j < needle.length; j++){
            if(haystack[i + j] === needle[j]){
                count++
            } else{
                break
            } 
        }
        if(count === needle.length){
            return i;
        }
    }
    return -1;
}

console.log(strStr("sadbutsad", "sad"));

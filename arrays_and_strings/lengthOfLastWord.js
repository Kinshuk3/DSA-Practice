/** LEETCODE PROBLEM: 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let length = 0

    // loop from last till you find a space
    for(let i = s.length - 1; i >= 0; i--){

        if(s[i] === " " & length === 0){
            continue;
        }
        else if(s[i] === " "){
            break;
        } else{
            length++;
        }   
    }
    
    return length;
};

console.log(lengthOfLastWord("Hello World"))
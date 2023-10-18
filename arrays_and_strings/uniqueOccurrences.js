/**
 * LEETCODE PROBLEM: 1207. Unique Number of Occurrences
 * https://leetcode.com/problems/unique-number-of-occurrences/description/
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count = {}
    const uniqueSet = new Set()

    for(let x of arr){
        count[x] = (count[x] || 0) + 1
    }
    
    for(let i in count){
        // add to set
        if(!uniqueSet.has(count[i])){
            uniqueSet.add(count[i])
        }
        else{
            return false
        }
    }
    return true
};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))
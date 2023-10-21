/**
 * LEETCODE PROBLEM: 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let count = new Map()

    for(let num of nums){
        count.set(num, (count.get(num) || 0) + 1)

        if(count.get(num) > 1){
            return true
        }
    }
     return false
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
/**
 * LEETCODE PROBLEM: 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[k-1] !== nums[i]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
};

console.log(removeDuplicates([1,1,2]))
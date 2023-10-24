/**
 * LEETCODE PROBLEM: 80. Remove Duplicates from Sorted Array II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1; // Your 'k' variable
    let tempLength = 1; // Your 'tempLength' variable

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            tempLength++;
        }else {
            tempLength = 1;
        }

        if(tempLength <=2){
            nums[k] = nums[i]
            k++
        }
    }
    return k;
};

console.log(removeDuplicates([1,1,1,2,2,3]))
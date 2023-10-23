/**
 * LEETCODE PROBLEM: 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length === 0) {
        return 0; // No elements, so the sequence length is 0.
    }

    const numSet = new Set(nums)
    let longest = 0
    
    for(const n of nums){
        // if the element is not start of sequence
        if(!numSet.has(n-1)){
            let length = 0
            while(numSet.has(length+n)){
                length++
            }
            longest = Math.max(length, longest)
        }
    }
    return longest
    
};

console.log(longestConsecutive([1,3,2,9,10,12,11]))
/**
 * LEETCODE PROBLEM: 219. Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// SOLUTION-1 O(N^2)
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
          return true;
        }
      }
    }
    return false;
  }
  console.log(containsNearbyDuplicate([1,2,3,1], 3))

//----SOLUTION-2 O(N)
var containsNearbyDuplicate2 = function(nums, k) {
    
    var window = new Set()
    let left = 0

    for(let right = 0; right < nums.length; right++){
        
        if(right - left > k){
            window.delete(nums[left])
            left++
        } 
        if(window.has(nums[right])){
            return true;
        }
        window.add(nums[right])
    }
    return false

};

console.log(containsNearbyDuplicate2([1,2,3,1], 3))
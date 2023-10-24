/**
 * LEETCODE PROBLEM: 189. Rotate Array
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  if (k === nums.length || k === 0) {
    return nums;
  }
  //reverse whole array
  let left = 0;
  let right = nums.length - 1;
  nums = swap(nums, left, right)
  // reverese the array till k elements

  left = 0;
  right = k - 1;
  nums = swap(nums, left, right)

  // reverese the array after k elements
  left = k;
  right = nums.length - 1;
  nums = swap(nums,left,right)

  return nums;
};

function swap(arr, start, end){

  //reverse whole array
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr
}

//---SOLUTION-2--SPACE complexity-O(n)
var rotate2 = function (nums, k) {
    k = k % nums.length;
  
    const res = []
    for(let i = 0; i < nums.length; i++){
        res[(i+k) % nums.length] = nums[i]
    }
    return res;
  };


console.log(rotate([1, 2, 3, 4, 5], 3));
console.log(rotate2([1, 2, 3, 4, 5], 3));


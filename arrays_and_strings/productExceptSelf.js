/**
 * LEETCODE PROBLEM: 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
//------SOLUTION-1 SPACE complexity: O(1)
var productExceptSelf = function (nums) {
  // initialize the result with 1
  const result = new Array(nums.length).fill(1);

  //calculate prefix
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // calculate postfix
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));


//------SOLUTION-2 SPACE complexity: O(n)
var productExceptSelf = function(nums) {
    const n = nums.length;
    
    // Initialize two arrays to store products to the left and right of each element.
    const prefix = new Array(n);
    const postfix = new Array(n);
    
    // Initialize result array with 1s.
    const result = new Array(n).fill(1);
    
    // Calculate prefix array.
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        prefix[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Calculate postfix array.
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        postfix[i] = rightProduct;
        rightProduct *= nums[i];
    }
    
    // Calculate the final result by combining prefix and postfix arrays.
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * postfix[i];
    }
    
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]); // Output: [0, 0, 9, 0, 0]


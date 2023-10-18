/**
 * LEETCODE PROBLEM: 349. Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const elementCount = new Map();
  const commonValues = new Set();

  for (let num of nums1) {
    elementCount.set(num, (elementCount.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    if (elementCount.has(num)) {
      commonValues.add(num);
    }
  }
  const returnArr = [...commonValues];
  return returnArr;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

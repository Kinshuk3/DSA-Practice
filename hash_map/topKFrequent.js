/**
 * LEETCODE PROBLEM: 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // create a map to store how many times the elements occured
  const count = new Map();
  const freq = [];

  // count the occurence of each value and store in map
  for (const index of nums) {
    count.set(index, (count.get(index) || 0) + 1);
  }

  // loop thru that count and update the freq
  for (const [key, val] of count) {
    if (!freq[val]) {
      freq[val] = [];
    }
    freq[val].push(key);
  }

  // loop from end of freq array
  let result = []
  for(let i = freq.length -1; i >= 0 && result.length < k; i--){
    // when you find the element at position
    if(freq[i]){
        console.log(...freq[i])
        result.push(...freq[i])
    }
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3,4], 2));

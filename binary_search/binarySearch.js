//-----Binary seach algorithm-------
/**
 * LEETCODE PROBLEM: 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 * @param {number[]} arr
 * @param {number} val
 * @return {number}
 */
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {

    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1
}

console.log(binarySearch([-1,0,3,5,9,12], 9));

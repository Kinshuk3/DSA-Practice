/**
 * LEETCODE PROBLEM: 1346. Check If N and Its Double Exist
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * 
 * @param {number[]} arr
 * @return {boolean}
 */

//SOLUTION 1: NAIVE BRUTE FORCE
var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if ((arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) && i !== j) {
          return true;
        }
      }
    }
  
    return false;
  };
  
//   console.log(checkIfExist([10, 2, 5, 3]));
//   console.log(checkIfExist([3, 1, 7, 11]));


  // SOLUTION -2: SET  time complexity of O(N)
  var checkIfExist = function (arr) {

    const found = new Set()

    for(let i of arr){
        if(found.has(2 * i) || found.has(i/2)){
            return true
        }
        found.add(i)
    }

    return false;
  };

  console.log(checkIfExist([10, 2, 5, 3]));
  console.log(checkIfExist([3, 1, 7, 11]));
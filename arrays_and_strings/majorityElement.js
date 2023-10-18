/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1
var majorityElement = function (nums) {
    let counterObject = {};
  
    for (let val of nums) {
      counterObject[val] = (counterObject[val] || 0) + 1;
    }
  
    let majorityElement = null;
    let majorityElementValue = 0;
  
    for (let key in counterObject) {
      if (counterObject[key] > majorityElementValue) {
        majorityElementValue = counterObject[key];
        majorityElement = key;
      }
    }
    return majorityElement;
  };
  
  const element = majorityElement([2, 2, 1, 1, 1, 2, 2, 4, 4, 5]);
  console.log(element);
  
  // [2,2,1,1,1,2,2,4,4,5]
  // {1:3, 2:4, 4:2, 5:1}

  // Solution 1
var majorityElement2 = function (nums) {
    let result = nums[0]
    let count = 1;

    for(let i = 1; i < nums.length; i++){

        if(count === 0){
            result = nums[i]
        }
        if(nums[i] === result){
            count++
        }else{
            count--
        }

    }
    
    return result;
  };
  
  const element2 = majorityElement2([2, 2, 1, 1, 1, 2, 2, 4, 4, 5]);
  console.log(element);
  
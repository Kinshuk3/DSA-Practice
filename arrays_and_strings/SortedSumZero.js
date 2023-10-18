const sumZero = (sortedArray) => {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      let sum = sortedArray[left] + sortedArray[right];
  
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        return [sortedArray[left], sortedArray[right]];
      }
    }
    return undefined;
  };
  
  const indexes = sumZero([-3, -2, -1, 0, 1, 5]);
  console.log(indexes);
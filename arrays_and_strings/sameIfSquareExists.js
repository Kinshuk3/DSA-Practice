const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    let obj1 = {};
    let obj2 = {};
  
    for (let i = 0; i < arr1.length; i++) {
      obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
    }
  
    for (let i = 0; i < arr2.length; i++) {
      obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
    }
  
    for (let key in obj1) {
      // if keys  dont have same value
      if (obj1[key ** 2] !== obj2[key]) {
        return false;
      }
      // if keys dont match
      if (!(key ** 2 in obj2)) {
        return false;
      }
    }
    return true;
  };
  
  const result = same([1, 2, 3], [1, 4, 8]);
  console.log(result);
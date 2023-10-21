/**
 * LEETCODE PROBLEM: 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < ransomNote.length; i++) {
    obj1[ransomNote[i]] = (obj1[ransomNote[i]] || 0) + 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    obj2[magazine[i]] = (obj2[magazine[i]] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key in obj2) || obj1[key] > obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("aa", "aab"));

//-----SOLUTION 2----- HASH MAP

var canConstruct2 = function (ransomNote, magazine) {
    
    let ransomMap = new Map()
    let magazineMap = new Map()

    for(let i = 0; i <ransomNote.length; i++){
        ransomMap.set(ransomNote[i], (ransomMap.get(ransomNote[i] || 0) +1))
    }

    for(let i = 0; i <magazine.length; i++){
        magazineMap.set(magazine[i], (magazineMap.get(magazine[i] || 0) +1))
    }

    for(let key of ransomMap.keys()){
        if(!(magazineMap.has(key)) || ransomMap.get(key) > magazineMap.get(key)){
            return false
        }
    }
    return true
};
  
console.log(canConstruct2("aa", "aab"));


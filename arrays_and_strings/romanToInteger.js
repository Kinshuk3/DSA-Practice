/**
 * LEETCODE PROBLEM: 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  // loop thru
  for(let i = 0; i < s.length; i++){
    if(i + 1 < s.length && romanNumerals[s[i]] < romanNumerals[s[i+1]]){
        result -= romanNumerals[s[i]]
    } else{
        result += romanNumerals[s[i]]
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));

/**
 * LEETCODE PROBLEM: 205. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//---SOLUTION-1: Objects
var isIsomorphic = function (s, t) {
  let obj1 = {};
  let obj2 = {};

  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (!obj1[s[i]] && !obj2[t[i]]) {
      obj1[s[i]] = t[i];
      obj2[t[i]] = s[i];
    } else if (obj1[s[i]] !== t[i] || obj2[t[i] !== s[i]]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));

//---SOLUTION 2----HASH MAPS

var isIsomorphic2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i]) && !map2.has(t[i])) {
      map1.set(s[i], t[i]);
      map2.set(t[i], s[i]);
    } else if (map1.get(s[i]) !== t[i] || map2.get(t[i]) !== s[i]) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic2("egg", "add"));
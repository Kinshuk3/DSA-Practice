/**
 * LEETCODE PROBLEM: 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramGroups = new Map();

  for(const str of strs){
    const charCount = Array(26).fill(0) // initalize an array for All small letters

    // increase the frequency of each character of current string
    for(const char of str){
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    // create a key for it be grouped on
    const key = charCount.join("-")
    
    // now map this key to the string
    if(anagramGroups[key]){
        anagramGroups[key].push(str)
    } else{
        anagramGroups[key] = [str]
    }
  }

  // get the values from hashmap
  const result = Object.values(anagramGroups)
  return result
  
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

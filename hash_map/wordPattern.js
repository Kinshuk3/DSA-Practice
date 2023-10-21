/**
 * LEETCODE: 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var words = s.split(" ");
    
    if(pattern.length !== words.length){
        return false
    }

    let map1 = new Map(), map2 = new Map()
    
    for(let i in pattern){
        if (map1.get(pattern[i]) !== map2.get(words[i])) return false;
        map1.set(pattern[i], i)
        map2.set(words[i], i)
    }
    return true
};

console.log(wordPattern("abba", "dog cat cat fish"));
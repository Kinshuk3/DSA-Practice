/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let anagramChecker = true

    if(s.length !== t.length){
        return !anagramChecker
    }
    
    let firstString = {}
    let secondString = {}

    for(let i = 0; i < s.length; i++){
        firstString[s[i]] = (firstString[s[i]] || 0) + 1
    }
    for(let i = 0; i < t.length; i++){
        secondString[t[i]] = (secondString[t[i]] || 0) + 1
    }

    // check is the frequency of keys in both strings is equal or not and set anagramChecker
    for(keys in firstString){
        console.log(keys, secondString[keys])
        if(firstString[keys] !== secondString[keys]){
            anagramChecker = false
            break
        }
    }

    return anagramChecker
};

isAnagram("anagram", "nagaram")

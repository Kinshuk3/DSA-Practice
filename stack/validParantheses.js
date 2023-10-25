/**
 * LEETCODE PROBLEM: 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var brackets = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);
    var stack = []

    for(const c of s){
        if(brackets.has(c)){
            if(stack.length > 0 && stack[stack.length -1] === brackets.get(c)){
                stack.pop()
            }else{
                return false
            }
        } else{
            stack.push(c)
        }
    }
    return stack.length === 0 ? true : false
};

console.log(isValid("()[]{}"))
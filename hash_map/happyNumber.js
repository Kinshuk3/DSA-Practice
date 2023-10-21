/**
 * LEETCODE PROBLEM: 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let seen = new Set()

    while(!seen.has(n)){
        seen.add(n)

        n = sumOfSquare(n)
        if(n===1){
            return true
        }

    }
    return false
};

var sumOfSquare = function (n){
    
    let output = 0

    while(n!==0){
        // get the last digit of n
        let lastDigit = n % 10
        lastDigit = Math.pow(lastDigit, 2)
        output += lastDigit
        // remove the last diigt from n
        n = Math.floor(n/10)
    }
    return output
}

console.log(isHappy(1111111));
/**
 * LEETCODE PROBLEM: 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanMap = new Map([
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]);

    let result = '';
    for (const [symbol, value] of romanMap) {
        const count = Math.floor(num / value);
        if (count > 0) {
            result += symbol.repeat(count);
            num = num % value;
        }
    }
    return result;
}

console.log(intToRoman(58))
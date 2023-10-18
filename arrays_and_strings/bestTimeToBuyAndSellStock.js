/**
 * LEETCODE PROBLEM: 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */

//----SOLUTION-1-----O(n^2)
var maxProfit = function(prices) {
    
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        let currentDayPrice = prices[i]
        let nextDayPrice = 0
        for(let j = i + 1; j < prices.length; j++){
            nextDayPrice = prices[j]
            let tempProfit = nextDayPrice - currentDayPrice
            if(tempProfit > maxProfit){
                maxProfit = tempProfit
            }
        }
    }
    return maxProfit
};

console.log(maxProfit([7,6,4,3,1]))

//-------SOLUTION-2

var maxProfit2 = function(prices) {
    let maxProfit = 0;
    // left=buy, right=sell
    let l = 0;
    let r = 1;

    while(r <prices.length){
        if(prices[l] < prices[r]){
            let tempProfit = prices[r] - prices[l]
            maxProfit = Math.max(maxProfit, tempProfit)
        }
        else{
            l = r
        }
        r += 1   
    }

    return maxProfit;
};

console.log(maxProfit2([7,1,5,3,6,4]))


//-SOLUTION-3

var maxProfit3 = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};

console.log(maxProfit3([7,1,5,3,6,4]))

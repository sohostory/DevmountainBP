function best(prices) {
  let buyPrice = 0;
  let sellPrices = [];
  let profit = 0;

  prices.forEach((price, i) => {
    buyPrice = price;
    sellPrices = prices.slice(i + 1);
    sellPrices.forEach((sellPrice) => {
      if (profit < sellPrice - buyPrice) {
        profit = sellPrice - buyPrice;
      }
    });
  });
  return profit;
}

let maxProfit = best([15, 10, 20, 22, 1, 9]);
console.log(maxProfit);

function best(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

let maxProfit = best([15, 10, 20, 22, 1, 9]);
console.log(maxProfit);

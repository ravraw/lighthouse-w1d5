const stockPrices = [45, 24, 35, 31, 40, 38, 11];

let sellAt = 0;
let sellAtIndex = 0;
let buyAt = stockPrices[0]; // first day of stock market

stockPrices.forEach((price, index) => {
  // highest stock price in a range  excluding the first day
  if (price > sellAt && index !== 0) {
    sellAt = price;
    sellAtIndex = index;
    console.log(sellAt, index);
  }
});

// find the minimum buyAt price , before the stock reached the peak price(index of sellAt)
for (let i = 0; i < sellAtIndex; i++) {
  if (stockPrices[i] < buyAt) {
    buyAt = stockPrices[i];
  }
}

let profit = sellAt - buyAt;

console.log({ buyAt, sellAt, profit });

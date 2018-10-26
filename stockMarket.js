const stockPrices = [45, 24, 35, 31, 40, 38, 11];

let sellAt = 0;
let sellAtIndex = 0;
let buyAt = stockPrices[0];
let profit = 0;
let maxprofit = 0;

stockPrices.forEach((price, index) => {
  if (price > sellAt && index !== 0) {
    sellAt = price;
    sellAtIndex = index;
    console.log(sellAt, index);
  }
});

for (let i = 0; i < sellAtIndex; i++) {
  if (stockPrices[i] < buyAt) {
    buyAt = stockPrices[i];
  }
}

profit = sellAt - buyAt;

console.log({ buyAt, sellAt, profit });

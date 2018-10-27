let totalBottles = 0;
let dollars = 0;

let btls = 0;
let emptyEarned = 0;
let empty = 0;
let caps = 0;
let capsEarned = 0;

let money = +process.argv.slice(2);

const returnOnInvestment = investment => {
  //convert investment to dollars
  dollars = investment;
  while (dollars >= 2 || btls) {
    // buy a btl and convert it to  caps and empty and add 1 to totalBottales
    if (dollars >= 2) {
      dollars -= 2;
      btls++;
      totalBottles++;
    }
    if (btls) {
      caps += btls;
      capsEarned += btls;
      empty += btls;
      emptyEarned += btls;
      btls = 0;
    }

    if (empty >= 2) {
      let newBtls = Math.floor(empty / 2);
      btls += newBtls;
      empty = empty - newBtls * 2;
      totalBottles += newBtls;
    }

    if (caps >= 4) {
      let newBtls = Math.floor(caps / 4);
      btls += newBtls;
      caps = caps - newBtls * 4;
      totalBottles += newBtls;
    }
  }
  return {
    "TOTAL BOTTLES": totalBottles,
    "REMAINING EMPTY": empty,
    "REMAINING CAPS": caps,
    "TOTAL EARNED": { emptyEarned, capsEarned }
  };
};

console.log(returnOnInvestment(money));

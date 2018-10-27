let totalBottles = 0;
let dollars = 0;
let btls = 0;
let empty = 0;
let caps = 0;

const returnOnInvestment = investment => {
  //convert investment to dollars
  dollars = investment;
  console.log({ totalBottles, dollars, btls, empty, caps });

  while (dollars >= 2 || btls) {
    // buy a btl and convert it to  caps and empty and 1 to totalBottales
    if (dollars >= 2) {
      dollars -= 2;
      btls++;
      totalBottles++;
      console.log({ totalBottles, dollars, btls, empty, caps });
    }
    if (btls) {
      caps += btls;
      empty += btls;
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
  console.table({ totalBottles, dollars, btls, empty, caps });
};

console.log(returnOnInvestment(10));

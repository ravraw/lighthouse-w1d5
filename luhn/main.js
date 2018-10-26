// Helper to double alternate numbers

// helper to reduce a number to single value
const reduceNumber = number =>
  number
    .toString()
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
console.log(reduceNumber(11));

// doubles a number
const doubleNumber = number => number * 2;

// doubles alternate nubers of a array
const doubleIt = str => {
  let num = str.split("").reverse();
  let doubled = num.map((num, index, arr) => {
    if (index % 2 === 0) {
      let double = doubleNumber(+num);
      return double > 9 ? reduceNumber(double) : double;
    } else return +num;
  });
  return doubled.reverse();
};

// calculate key
const calculateKey = arr => {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  let numberString = (sum * 9).toString();
  console.log(numberString);
  return {
    sum: sum,
    key: +numberString[numberString.length - 1]
  };
};

// Check if number is valid

const check = obj => {
  return (obj.key + obj.sum) % 10 === 0 ? true : false;
};

console.log(doubleIt("7992739871"));

console.log(check(calculateKey(doubleIt("7992739871"))));

module.export = check;

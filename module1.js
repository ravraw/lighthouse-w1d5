var coolMath = require("./module2");

console.log(coolMath.PHI); // log a Number

coolMath.explain(); // invokes the function `explain`

// const circle = require("./circle.js");
// console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

console.log(require.main);

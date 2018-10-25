let str = "a man a plan a canal panama";
console.log(
  str
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("")
);
console.log(str.split(" ").join(""));

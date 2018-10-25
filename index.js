var chalk = require("chalk");
console.log(
  chalk.green("Hello") + " " + chalk.yellow("World") + " " + chalk.red("again")
);

console.log(
  chalk.green("Hello") + " " + chalk.yellow("World") + " " + chalk.red("again")
);
console.log(
  chalk.green("Hello") + " " + chalk.yellow("World") + " " + chalk.red("again")
);
console.log(
  chalk.green("Hello") + " " + chalk.yellow("World") + " " + chalk.red("again")
);

console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));
console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

console.log(chalk.keyword("orange")("Yay for orange colored text!"));
console.log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
console.log(chalk.hex("#DEADED").bold("Bold gray!"));

const error = chalk.bold.red;
const warning = chalk.keyword("orange");

console.log(error("Error!"));
console.log(warning("Warning!"));
const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);

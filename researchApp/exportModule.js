let list = [9, 8, 7];

module.exports.addToList = addToList = item => {
  list.push(item);
};
module.exports.printedList = printList = () => list.sort((a, b) => a - b);

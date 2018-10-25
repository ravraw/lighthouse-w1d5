function isPalindrome(s) {
  var trimmedString = s.split(" ").join("");
  var stringReverse = trimmedString
    .split("")
    .reverse()
    .join("");
  return trimmedString === stringReverse;
}

module.exports = isPalindrome;

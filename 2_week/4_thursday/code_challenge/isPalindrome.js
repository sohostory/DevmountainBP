// Write your code below

const isPalindrome = (word) => {
  const wordReverse = word.split("").reverse().join("");
  return word === wordReverse;
};

console.log("BOB", isPalindrome("BOB")); // returns true
console.log("Bob", isPalindrome("Bob")); // return false

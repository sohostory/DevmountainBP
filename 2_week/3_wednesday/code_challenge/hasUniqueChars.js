// Write your code below

function hasUniqueChars(word) {
  const uniqueChars = new Set();

  for (let i = 0; i < word.length; i++) {
    if (uniqueChars.has(word[i])) {
      return false;
    } else {
      uniqueChars.add(word[i]);
    }
  }
  return true;
}

console.log(hasUniqueChars("Bob"));

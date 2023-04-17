const vowels = ["a", "e", "i", "o", "u"];

const hasMoreVowels = (word) => {
  let vowelCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < word.length; i++) {
    vowels.includes(word[i].toLowerCase()) ? vowelCount++ : consonantsCount++;
  }

  return vowelCount > consonantsCount;
};

console.log(hasMoreVowels("Aal"));

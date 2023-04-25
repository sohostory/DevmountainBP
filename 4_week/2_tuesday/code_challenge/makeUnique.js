// Write your solution below:

function makeUnique(str) {
  let newStr = [];
  for (let char of str) {
    if (!newStr.includes(char)) {
      newStr.push(char);
    }
  }

  return newStr.join("");
}

console.log(makeUnique("iwanttoclimbamountain"));

function makeUnique(str) {
  const newStr = new Set();
  for (let char of str) {
    newStr.add(char);
  }

  return [...newStr].join("");
}

console.log(makeUnique("iwanttoclimbamountain"));

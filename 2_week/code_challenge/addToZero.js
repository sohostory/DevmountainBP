// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:

includesOpposite = false;

for (let i = 0; i < array.length; i++) {
  if (array.includes(array[i] * -1, i + 1)) {
    includesOpposite = true;
  }
}

console.log("Add to Zero:", includesOpposite);

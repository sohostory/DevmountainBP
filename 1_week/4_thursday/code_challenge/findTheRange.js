// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:
let maxNum = 0;
let minNum = array[0];

for (let i = 0; i < array.length; i++) {
  if (maxNum < array[i]) {
    maxNum = array[i];
  }
  if (minNum > array[i]) {
    minNum = array[i];
  }
}

console.log("Max: ", maxNum);
console.log("Min: ", minNum);

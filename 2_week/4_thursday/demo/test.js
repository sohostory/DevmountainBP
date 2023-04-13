const numArray = [0, 1, 2, 3, 4];

const myNum = numArray
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .reduce((acc, curr) => acc - curr, 0);

console.log("without initial:", myNum);

const myNum = numArray
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .reduce((acc, curr) => acc - curr, 0);

console.log("with initial", myNum);

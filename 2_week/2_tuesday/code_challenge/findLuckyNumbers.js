// Write your code below this line.

const luckyNumbers = (num) => {
  let luckyArray = [];

  while (luckyArray.length < num) {
    const number = Math.floor(Math.random() * 10) + 1;
    if (!luckyArray.includes(number)) {
      luckyArray.push(number);
    }
  }

  return luckyArray;
};

let luckyNums = luckyNumbers(4);
console.log(luckyNums);

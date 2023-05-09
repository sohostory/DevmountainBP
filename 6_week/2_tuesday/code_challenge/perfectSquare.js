function perfectSquare(num) {
  let sqr = Math.sqrt(num);
  if (Number.isInteger(sqr)) {
    return (sqr + 1) ** 2;
  } else {
    return -1;
  }
}

console.log(perfectSquare(289));

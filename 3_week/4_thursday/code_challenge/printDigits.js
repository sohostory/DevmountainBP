function printDigits(num) {
  let remainder = 0;

  while (num > 0) {
    remainder = num % 10;
    console.log(remainder);
    num = (num - remainder) / 10;
  }
}

printDigits(231645);

function createPhoneNumber(array) {
  const [areaCode, firstThree, lastFour] = [
    array.slice(0, 3).join(""),
    array.slice(3, 6).join(""),
    array.slice(6).join(""),
  ];
  return `(${areaCode}) ${firstThree}-${lastFour}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

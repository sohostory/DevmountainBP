function sortByProduct(array) {
  array.sort((a, b) => {
    const productA = a * (array.indexOf(a) + 1);
    const productB = b * (array.indexOf(b) + 1);
    return productA - productB;
  });
  return array;
}

const testArray = [23, 2, 3, 4, 5];
console.log(sortByProduct(testArray));

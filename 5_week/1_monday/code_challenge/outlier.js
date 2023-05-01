function findOutlier(array) {
  let div = array.reduce((acc, cur) => acc + (cur % 2), 0);

  let outlier = null;

  if (div === 1) {
    outlier = array.filter((num) => num % 2 === 1);
  } else {
    outlier = array.filter((num) => num % 2 === 0);
  }

  return outlier[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

const smallestDifference = (arr1, arr2) => {
  // Sort the arrays in ascending order
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let smallestDiff = Infinity;
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Traverse both arrays and update smallestDiff when a smaller difference is found
  while (i < arr1.length && j < arr2.length) {
    const diff = Math.abs(arr1[i] - arr2[j]);
    if (diff < smallestDiff) {
      smallestDiff = diff;
    }

    // Move the pointers based on the comparison
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return smallestDiff;
};

const arr1 = [10, 20, 14, 16, 18];
const arr2 = [30, 23, 54, 33, 96];
const result = smallestDifference(arr1, arr2);
console.log(result);

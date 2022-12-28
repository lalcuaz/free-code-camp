function largestOfFour(arr) {
  const largestArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = -Infinity;
    for (let x = 0; x < arr[i].length; x++) {
      if (arr[i][x] > largestNum) {
        largestNum = arr[i][x];
      }
    }
    largestArr.push(largestNum);
  }
  return largestArr;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

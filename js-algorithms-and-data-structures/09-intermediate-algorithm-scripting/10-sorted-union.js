// combine all three functions in the same order but remove
// all duplicate numbers
// push in the first array
// iterate through the next arrays and push in unique numbers
function uniteUnique(...arr) {
  const combinedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (const num of arr[i]) {
      if (!combinedArr.includes(num)) {
        combinedArr.push(num);
      }
    }
  }

  return combinedArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

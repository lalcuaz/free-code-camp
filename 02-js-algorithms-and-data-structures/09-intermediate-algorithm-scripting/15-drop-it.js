/* iterate through each element and remove them
      starting from the beginning until func returns true
      the rest of the array is returned once the condition is
      satisfied*/
/*       for (let i = 0; i < arr.length; ) {
          if (func(arr[i])) {
            return arr;
          } else {
            arr.shift();
          }
        }
        return arr; */

function dropElements(arr, func) {
  while (arr.length !== 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 4;
  })
);
// returns [3, 4]
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);

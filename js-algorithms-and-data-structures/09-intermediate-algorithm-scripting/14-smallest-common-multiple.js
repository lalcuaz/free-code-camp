/* find the smallest common multiple of the provided parameters
      that can be evenly divided by both as well as as by all sequential numbers in the range between these parameters.
      no remainders for both = common multiple */
/* let isLower;
        let isHigher;
        if (arr[num] < arr[1]) {
          isHigher = 1;
          isLower = 0;
        } else {
          isHigher = 0;
          isLower = 1;
        }

        let isCommonAndDivisible = false;
        let i = 1;
        while (!isCommonAndDivisible) {
          if (arr[0] % i === 0 && arr[1] % i === 0) {
            for (let x = isLower +1; x < isHigher; x++) {
              if (i )
            }
          }

          i++;
        } */
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);

  let isCommonAndDivisible = false;
  let i = 1;
  while (!isCommonAndDivisible) {
    for (let x = min; x <= max; x++) {
      if (!(i % x === 0)) {
        break;
      }

      if (x === max) {
        return i;
      }
    }
    i++;
  }

  return "broken";
}

console.log(smallestCommons([1, 5]));

function getIndexToIns(arr, num) {
  const sortedArray = [];
  let numIndex = -1;
  arr.sort(sortAscending);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num && numIndex === -1) {
      sortedArray.push(num);
      numIndex = i;
    }
    sortedArray.push(arr[i]);
  }

  if (numIndex === -1) {
    sortedArray.push(num);
    return sortedArray.indexOf(num);
  }
  return numIndex;
}

function sortAscending(first, second) {
  if (first === second) {
    return 0;
  }
  if (first < second) {
    return -1;
  } else {
    return 1;
  }
}

console.log(getIndexToIns([40, 60], 50));

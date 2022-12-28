function frankenSplice(arr1, arr2, n) {
  let copyArray = arr2.slice();
  let newArray = [];
  newArray = copyArray.splice(n, copyArray.length - n);
  for (let i = 0; i < arr1.length; i++) {
    copyArray.push(arr1[i]);
  }
  for (let i = 0; i < newArray.length; i++) {
    copyArray.push(newArray[i]);
  }
  console.log(copyArray);
  return copyArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

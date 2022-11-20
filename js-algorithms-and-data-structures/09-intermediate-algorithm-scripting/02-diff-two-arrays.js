function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2).filter((element, index, arr) => {
    let pass = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element && i !== index) {
        pass = false;
      }
    }

    return pass;
  });
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

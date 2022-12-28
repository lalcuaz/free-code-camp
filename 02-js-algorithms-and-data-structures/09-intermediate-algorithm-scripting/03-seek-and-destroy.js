/*function destroyer(arr1, ...arr2) {
  return arr1.filter((num) => {
    for (let i = 0; i < arr2.length; i++) {
      if (num === arr2[i]) {
        return false;
      }
    }
    return true;
  });
}*/

function destroyer(arr1, ...arr2) {
  return arr1.filter((num) => !arr2.includes(num));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

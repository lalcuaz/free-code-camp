/* return arr.map((num) => {
  if (Array.isArray(num)) {
    steamrollArray(num);
  } else {
    return num;
  }
}); */
function steamrollArray(arr, emptyArr = []) {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      steamrollArray(element, emptyArr);
    } else {
      emptyArr.push(element);
    }
  });
  return emptyArr;
}

//[1,2,3,4]
console.log(steamrollArray([1, [2], [3, [[4]]]]));

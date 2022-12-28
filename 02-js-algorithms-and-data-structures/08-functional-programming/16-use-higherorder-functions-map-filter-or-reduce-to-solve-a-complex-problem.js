const squareList = (arr) => {
  // Only change code below this line
  return arr.filter((num) => num > 0 && num % 1 === 0).map((num) => num * num);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

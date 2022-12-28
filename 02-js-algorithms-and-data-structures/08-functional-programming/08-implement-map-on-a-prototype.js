Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  // Only change code above this line
  console.log(newArray);
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap((item) => item * 2);

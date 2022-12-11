// sums two args together
// if only one arg, return a func that expects one arg and returns the sum
// func sumTwoAnd(oneNum)
// return undefined if param isn't a valid number
/* if (
          typeof arguments[0] === "number" &&
          typeof arguments[1] === "number"
        ) {
          switch (arguments.length) {
            case 1:
              return (num) => first + num;
              break;
            case 2:
              console.log(first);
              console.log(second);
              return first + second;
            default:
              return undefined;
          }
        } else {
          return undefined;
        } */
function addTogether(...args) {
  const [first, second] = args;
  if (arguments.length === 1 && typeof first === "number") {
    return (num) => {
      if (typeof num === "number") {
        return num + first;
      } else {
        return undefined;
      }
    };
  }

  if (typeof first === "number" && typeof second === "number") {
    return first + second;
  } else {
    return undefined;
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(2, "3"));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

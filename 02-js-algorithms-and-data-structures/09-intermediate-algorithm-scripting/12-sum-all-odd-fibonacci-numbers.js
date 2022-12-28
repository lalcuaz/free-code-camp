/*       given a pos int num, return the sum of all odd fibonacci numbers
           that are less than or equal to num
           the first two numbers in a sequence are 1 and 1.
           every additional number in the sequence is the sum of the two previous numbers. so first 6: 1, 1, 2, 3, 5, 8
           sumFibs(10) returns 10, all odd fib numbs less than or equal to 10
           are 1, 1, 3, 5        
          const getPrevious = (arr) => {
          const tempArray = [...arr];
          return tempArray.pop();
        };        
          for (let i = 1; i <= num; ) {
          if (i % 2 !== 0) {
            total = total + i;
          }
          previous = i;
          i = getPrevious(fibArray) + i;
          fibArray.push(previous);

          2.

          for (let i = 1; i <= num; ) {
          if (i % 2 !== 0) {
            total += i;
          }
          i = previous + i;
          previous = i - previous;
        }
        }*/
function sumFibs(num) {
  let previous = 1;
  let total = 1;
  let current = 1;

  while (current <= num) {
    if (current % 2 !== 0) {
      total += current;
    }
    current += previous;
    previous = current - previous;
  }

  return total;
}

console.log(sumFibs(4));

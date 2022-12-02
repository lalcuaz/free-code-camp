/*
      prime = whole number greater than 1 with exactly two divisors, 1 and itself.
      ex, 2 is a prime, only divisible by 1 and 2
      4 is not a prime, divisible buy 1, 2, and 4
      sumPrimes returns the sum of all prime numbers that are less than or
      equal to num.
       */
function sumPrimes(num) {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  let total = 0;
  if (num > 1) {
    for (let z = 2; z <= num; z++) {
      if (isPrime(z)) {
        total += z;
      }
    }

    return total;
  }

  return "1 or less";
}

console.log(sumPrimes(10));

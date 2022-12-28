const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFullName = function (input) {
    fullName = input;
  };

  this.setFirstName = function (input) {
    fullName = input + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (input) {
    fullName = fullName.split(" ")[0] + " " + input;
  };
};

const bob = new Person("Bob Ross");
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.fullName);

function Animal() {}
function Bird() {
  Bird.prototype.constructor = Bird;
}
function Dog() {
  Dog.prototype.constructor = Dog;
}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let duck = new Bird();
let beagle = new Dog();

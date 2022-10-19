// Only change code below this line
// Stores in farenheit, accepts and returns in celsius
class Thermostat {
  constructor(farenheit) {
    this._temperature = farenheit;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this._temperature - 32);
  }

  // setter
  set temperature(celsius) {
    this._temperature = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

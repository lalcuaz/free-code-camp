// T = 2(pi) sqrt((a^3)/GM)
// T = 2(3.14) sqrt(((6367.4447+avgalt)^3)/398600.4418))
// returns a new array that transforms
// avg altitude into their orbital periods(s)
// {name: 'name', orbitalPeriod: num}
// values averaged to the nearest whole num
//
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map((element) => ({
    name: element.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + element.avgAlt, 3) / GM)
    ),
  }));
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);

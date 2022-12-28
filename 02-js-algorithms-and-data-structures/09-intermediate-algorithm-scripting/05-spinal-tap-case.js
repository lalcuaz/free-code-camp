function spinalCase(str) {
  return str
    .match(/[A-Za-z][a-z]*/g)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));

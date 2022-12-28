function sentensify(str) {
  // Only change code below this line
  let byNonCharacters = str.split(/\W/);
  return byNonCharacters.join(" ");

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");

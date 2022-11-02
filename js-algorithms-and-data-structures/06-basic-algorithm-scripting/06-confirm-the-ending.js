function confirmEnding(str, target) {
  let condition = false;
  let count = -1;
  for (let i = str.length - target.length; i < str.length; i++) {
    count++;
    if (str[i] === target[count]) {
      condition = true;
    } else {
      return false;
    }
  }
  return condition;
}

confirmEnding("Bastian", "n");

function findLongestWordLength(str) {
  let length = 0;
  let temp = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      temp++;
      if (temp > length) {
        length = temp;
      }
    } else {
      temp = 0;
    }
  }
  return length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

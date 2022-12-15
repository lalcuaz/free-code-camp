/*a caesar cipher, also known as a
      shift cipher
      the meanings of the letters are shifted
      by some set amount
      ROT13 cipher, the values of letters are shifted by 13 places. A -> N B -> O
      function takes a rot13 encoded string as
      an input and returns a decoded string
      all letters uppercase, no changes to
      non-alphabetic characters*/
function rot13(str) {
  const alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let decodedStr = "";
  let alphabetIndex = 0;
  // const max =
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      alphabetIndex = alphabetArr.indexOf(str[i]) - 13;
      if (alphabetIndex < 0) {
        alphabetIndex += 26;
      }
      decodedStr += alphabetArr[alphabetIndex];
    } else {
      decodedStr += str[i];
    }
  }
  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));

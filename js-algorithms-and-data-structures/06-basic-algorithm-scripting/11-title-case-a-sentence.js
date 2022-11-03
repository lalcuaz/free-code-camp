function titleCase(str) {
  let word = "";
  let wordArray = [];
  let newWord = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
      if (word.length === 1) {
        word = word.toUpperCase();
      }
    } else {
      wordArray.push(word);
      word = "";
    }
  }
  if (word !== "") {
    wordArray.push(word);
  }

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === wordArray[wordArray.length - 1]) {
      newWord += wordArray[i];
    } else {
      newWord += wordArray[i] + " ";
    }
  }
  return newWord;
}

titleCase("I'm a little tea pot");

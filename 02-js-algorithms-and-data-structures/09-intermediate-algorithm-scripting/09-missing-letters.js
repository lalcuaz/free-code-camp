// find the missing letter in the passed letter range and return it
// if all letters are present return undefined
function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const start = alphabet.indexOf(str[0]);

  for (let i = start; i < start + str.length; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));

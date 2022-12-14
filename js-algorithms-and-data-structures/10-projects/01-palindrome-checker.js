//return true if palindrome
//p is a word or sentence thats spelled the
//same way forwards/backward
//ignoring punct, case, spacing
//need to remove all non-alphanumeric chars
//everything lowercase
// const splitStr = str.replace(/[^a-zA-Z]+\s/, "");
function palindrome(str) {
  const splitStr = str.split(/[^a-zA-Z0-9]+/);

  let newStr = "";

  for (const element of splitStr) {
    newStr += element;
  }
  newStr = newStr.toLowerCase();
  for (let i = 0, x = newStr.length - 1; i < x; i++) {
    if (newStr[i] != newStr[x]) {
      return false;
    }
    x -= 1;
  }
  return true;
}

console.log(palindrome("1 eye for of 1 eye."));

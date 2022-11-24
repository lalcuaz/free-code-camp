function myReplace(str, before, after) {
  const replaceStr =
    (/^[A-Z]/.test(before) ? after[0].toUpperCase() : after[0].toLowerCase()) +
    after.slice(1);

  return str.replace(before, replaceStr);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped")
);

function mutation(arr) {
  const firstString = arr[0].toLowerCase();
  const secondString = arr[1].toLowerCase();
  for (let i = 0; i < secondString.length; i++) {
    if (firstString.indexOf(secondString[i]) === -1) {
      return false;
    }
    console.log(firstString[i]);
  }

  return true;
}

mutation(["hello", "hey"]);

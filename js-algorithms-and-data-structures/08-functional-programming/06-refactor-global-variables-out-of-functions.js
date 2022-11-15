// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
  const newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const newBookList = [...bookList];
  const bookIndex = newBookList.indexOf(bookName);
  if (bookIndex >= 0) {
    newBookList.splice(bookIndex, 1);
    return newBookList;

    // Change code above this line
  }
}

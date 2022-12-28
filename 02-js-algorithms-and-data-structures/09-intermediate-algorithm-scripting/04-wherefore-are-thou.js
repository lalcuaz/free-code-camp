function whatIsInAName(collection, source) {
  return collection.filter((item) => {
    for (let property in source) {
      if (
        !item.hasOwnProperty(property) ||
        item[property] !== source[property]
      ) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

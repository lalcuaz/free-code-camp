let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    userObj.hasOwnProperty("Alan") &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }

  return false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));

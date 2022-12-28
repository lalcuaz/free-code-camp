const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let x = 0;
  for (let user in users) {
    if (usersObj[user].online === true) {
      x++;
    }
  }

  return x;
  // Only change code above this line
}

console.log(countOnline(users));

// Only change code below this line
function urlSlug(title) {
  let modTitle = title.toLowerCase();
  modTitle = modTitle.split(" ");
  modTitle = modTitle.filter((item) => item.match(/\S/));
  console.log(modTitle);
  const urlString = modTitle.join("-");
  console.log(urlString);
  return urlString;
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

/*
MUCH MORE EFFICIENT
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

OR

function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
*/

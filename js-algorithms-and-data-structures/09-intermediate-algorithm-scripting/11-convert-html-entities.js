/*Convert the characters &, <, >, " (double quote), and '   (apostrophe),
      in a string to their corresponding HTML entities. */
/*       return str
        .replaceAll(/&/g, "&amp;")
        .replaceAll(/</g, "&lt;")
        .replaceAll(/>/g, "&gt")
        .replaceAll(/"/g, "&quot;")
        .replaceAll(/'/g, "&apos"); */

function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>\"']/g, (match) => entities[match]);
}
// Dolce &amp; Gabbana
console.log(convertHTML("Dolce & Gabbana"));

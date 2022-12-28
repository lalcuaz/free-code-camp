function translatePigLatin(str) {
  if (/[aeiou]/.test(str[0])) return str.concat("way");
  const consCluster = str.match(/^[^aeiou]*/);
  return str.substring(consCluster[0].length).concat(consCluster + "ay");
}
translatePigLatin("consonant");

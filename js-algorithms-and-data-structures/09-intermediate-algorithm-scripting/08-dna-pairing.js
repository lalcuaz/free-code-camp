function pairElement(str) {
  const dna = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        dna.push(["A", "T"]);
        break;
      case "T":
        dna.push(["T", "A"]);
        break;
      case "C":
        dna.push(["C", "G"]);
        break;
      case "G":
        dna.push(["G", "C"]);
        break;
    }
  }

  return dna;
}

console.log(pairElement("GCG"));

// convert a DNA Sequence to binary
const dnaToBinary = (dna) => {
  const dnaToBinaryMap = {
    A: "00",
    T: "01",
    G: "10",
    C: "11",
  };
  return dna
    .split("")
    .map((letter) => dnaToBinaryMap[letter])
    .join("");
};

export { dnaToBinary };

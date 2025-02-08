const naiveStringSearch = (string, pattern) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (string[i + j] !== pattern[j]) {
        break;
      }
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
};

console.log(naiveStringSearch("hahaha", "ha"));

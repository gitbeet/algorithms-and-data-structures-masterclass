const ach = (w1, w2) => {
  if (w1.length !== w2.length) return false;

  const m = {};

  for (let c of w1) {
    m[c] = (m[c] || 0) + 1;
  }

  for (let c of w2) {
    m[c]--;
    if (m[c] < 0) return false;
  }

  for (let k in m) {
    if (m[k] !== 0) return false;
  }

  return true;
};

console.log(ach("hello", "olleh"));

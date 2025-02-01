// all elements of first array are squared in second array
const squareChecker = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  const m1 = {};
  const m2 = {};
  for (let i = 0; i < a1.length; i++) {
    m1[a1[i]] = m1[a1[i]] ? m1[a1[i]] + 1 : 1;
  }
  for (let i = 0; i < a2.length; i++) {
    m2[a2[i]] = m2[a2[i]] ? m2[a2[i]] + 1 : 1;
  }
  for (let k in m1) {
    if (!(k ** 2 in m2)) return false;
    if (m1[k] !== m2[k ** 2]) return false;
  }
  return true;
};

const arr1 = [5, 3, 3, 5, 2, 1];
const arr2 = [25, 9, 1, 4, 25, 9];

// const result = squareChecker(arr1, arr2);
// console.log(result);

const anagramChecker = (w1, w2) => {
  if (w1.length === 0 && w2.length === 0) return true;
  if (w1.length !== w2.length) return false;
  const m1 = {};
  const m2 = {};

  for (let i = 0; i < w1.length; i++) {
    m1[w1[i]] = m1[w1[i]] ? m1[w1[i]] + 1 : 1;
  }

  for (let i = 0; i < w2.length; i++) {
    m2[w2[i]] = m2[w2[i]] ? m2[w2[i]] + 1 : 1;
  }

  for (let k in m1) {
    if (m1[k] !== m2[k]) return false;
  }
  return true;
};

const anagramCheckerOptimized = (w1, w2) => {
  if (w1.length === 0 && w2.length === 0) return true;
  if (w1.length !== w2.length) return false;
  const m = {};

  for (let c of w1) {
    m[c] = (m[c] || 0) + 1;
  }
  for (let c of w2) {
    if (!m[c]) return false;
    m[c]--;
  }

  return true;
};

const word1 = "hello";
const word2 = "olleh";
const word3 = "haoll";

const result = anagramCheckerOptimized(word1, word2);
console.log(result);

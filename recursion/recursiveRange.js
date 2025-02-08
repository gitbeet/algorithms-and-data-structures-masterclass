// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (n) => {
  if (n === 1) return 1;
  return n + recursiveRange(n - 1);
};

// rr(4) = 4 + rr(3) = 4+3+rr(2) = 4+3+2+rr(1) ... = 4+3+2+1

console.log(recursiveRange(4));

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

// poa([2,3,4]) = 2*poa(3,4) = 2*3*poa(4) = 2*3*4*poa([]) = 2*3*4*1

console.log(productOfArray([2, 3, 4]));

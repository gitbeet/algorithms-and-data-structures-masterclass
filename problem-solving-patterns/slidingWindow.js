// used when looking for a continuous subset of an array (unique characters, max , min ...)

const maxSubarraySumNaive = (arr, num) => {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
    console.log(temp, max);
  }
  return max;
};

console.log("---naive---");
console.log(maxSubarraySumNaive([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log("--- ---");

const maxSubarraySum = (arr, num) => {
  //max starts at 0
  let maxSum = 0;
  // temp starts at 0
  let tempSum = 0;
  // null condition
  if (num > arr.length) return null;
  // sum first num numbers
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // temp = max
  tempSum = maxSum;
  // subtract the first element of the window and add the element that is next to the last and check -> if bigger than max -> max = temp
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(tempSum, maxSum);
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

const mss = (a, n) => {
  if (n > a) return null;
  let max = 0;
  let temp = 0;
  // sum the 1st n
  for (let i = 0; i < n; i++) {
    max += a[i];
  }
  temp = max;
  // "slide" window
  for (let i = n; i < a.length; i++) {
    temp = temp - a[i - n] + a[i];
    if (temp > max) max = temp;
  }
  return max;
};

console.log("---optimized---");
console.log(mss([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log("--- ---");

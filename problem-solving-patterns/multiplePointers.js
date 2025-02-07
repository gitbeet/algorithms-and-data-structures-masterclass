// count the unique values in a sorted array

// [1,2,3,4]

const countUniqueValues = (arr) => {
  if (!arr.length) return 0;
  if (arr.length === 1) return 1;
  let result = 1;
  let x = 0;
  let y = 1;
  while (x < arr.length - 1 && y < arr.length) {
    if (arr[x] !== arr[y]) {
      x++;
      arr[x] = arr[y];
      result++;
    }
    y++;
  }
  return result;
};

const countUniqueOptimized = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

const arr = [1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5];
let result = countUniqueOptimized(arr);
console.log(result);

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

console.log(bubbleSort([5, 4, 3, 6, 7, 12, 1, 0]));

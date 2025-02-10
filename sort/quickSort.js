function pivot(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = left;
  let pivotElement = arr[left];
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < pivotElement) {
      pivotIndex++;
      let temp = arr[i];
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 3, 4, 1, 2]));

/*
    - choose pivot -> start mid or end
    - end up with the right spot for the pivot at the end of the cycle by putting all the smaller elements before it and all the larger elements after it . The elements are put unsorted, the only sure thing is that the position of the pivot is the correct one
    - repeat the process for the elements on the left and the elements on the right recursively
*/

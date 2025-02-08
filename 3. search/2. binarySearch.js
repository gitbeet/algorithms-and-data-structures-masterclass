const binarySearch = (arr, tar) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > tar) end = mid - 1;
    if (arr[mid] < tar) start = mid + 1;
    if (arr[mid] === tar) return mid;
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 4));

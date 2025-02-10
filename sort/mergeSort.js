function merge(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([7, 4, 5, 3, 1, 9, 8, 2]));

/*                               [7,4,5,3,1,9,8,2]
                      [7,4,5,3]                     [1,9,8,2]
                    [7,4]   [5,3]                 [1,9]  [8,2]
                    [7] [4] [5] [3]            [1]  [9]  [8]     [2]
*/

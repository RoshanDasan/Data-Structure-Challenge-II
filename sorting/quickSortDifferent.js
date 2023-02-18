// different way to implement quick sort

function quickSort(arr) {
  if (arr.length == 1) return arr;

  let pivot = arr[arr.length - 1];

  let left = [],
    right = [];
  for (let value of arr.slice(0, arr.length - 1)) {
    pivot > value ? left.push(value) : right.push(value);
  }

  if (left.length > 0 && right.length > 0) {
    return [...quickSort(left), pivot, ...quickSort(right)];
  } else if (left.length > 0) {
    return [...quickSort(left), pivot];
  } else {
    return [pivot, ...quickSort(right)];
  }
}

console.log(quickSort([3, 1, 8, 5, 0, -1, 2, 5, 3, 8, 1]));

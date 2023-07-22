// different way to implement quick sort

function quickSort(arr) {
  if (!arr.length) return arr;
  const left = [],
    right = [],
    pivote = arr[arr.length - 1];
  arr.slice(0, arr.length - 1).forEach((element) => {
    element < pivote ? left.push(element) : right.push(element);
  });
  if (left.length && right.length)
    return [...quickSort(left), pivote, ...quickSort(right)];
  else if (left.length) return [...quickSort(left), pivote];
  else return [pivote, ...quickSort(right)];
}

// console.log(quickSort([3, 1, 8, -5, 0, -1, 2, 5, 3, 8, 1]));




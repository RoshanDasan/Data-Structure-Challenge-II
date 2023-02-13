function Pivot(arr, start, end) {
  let pivot = arr[start];
  let startIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      startIndex++;
      if(startIndex!=i)
      {
        swap(arr, startIndex, i);
      }
    }
  }
  swap(arr, start, startIndex);

  return startIndex;
}

swap = (arr, start, end) => {
  [arr[start], arr[end]] = [arr[end], arr[start]];
};

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = Pivot(arr, start, end);

    //left
    quickSort(arr, start, pivotIndex - 1);

    //right
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

let arr = [4, 6, 2, 8, 1, 3, 5, 0, 6, 2];

console.log(quickSort(arr));

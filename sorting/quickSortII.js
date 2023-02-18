function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivot = getPivot(arr, start, end);

    //left
    quickSort(arr, start, pivot - 1);

    //right
    quickSort(arr, pivot + 1, end);
  }

  return arr;
}

function getPivot(arr, start, end) {
  let pivot = arr[start];
  let startIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      startIndex++;
      swap(arr, i, startIndex);
    }
  }
  swap(arr, start, startIndex);
  return startIndex;
}

function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

// mergeSort

function mergeSort(arr) {
  if (arr.length == 1) return arr;

  var mid = Math.floor(arr.length / 2);

  return swaper(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function swaper(left, right) {
  let i = 0,
    j = 0,
    result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([4, 2, 7, 1, 4, 3, 9]));

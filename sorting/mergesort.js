function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
  let result = [];
  let i = 0,
    j = 0;
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

function mergeHelper(left, right) {
  let result = [];
  let i = 0,
    j = 0;
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

let arr = [3, 2, 5, 4, 7];

// second try

function mergeSortII(arr) {
  if (arr.length == 1) return arr;

  let mid = Math.floor(arr.length / 2);

  return mergeHelper(
    mergeSortII(arr.slice(0, mid)),
    mergeSortII(arr.slice(mid))
  );
}

let a = mergeSortII([4, 2, 7, 1, 4, 3, 9]);
console.log(a);

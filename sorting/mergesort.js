// sorting
const sort = (left, right) => {
  let result = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i]), i++;
    else result.push(right[j]), j++;
  }
  while (i < left.length) result.push(left[i]), i++;
  while (j < right.length) result.push(right[j]), j++;
  return result;
};

// function2
const merge = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return sort(merge(left), merge(right));
};

console.log(merge([4, 3, 6, 1, 5, 2]));

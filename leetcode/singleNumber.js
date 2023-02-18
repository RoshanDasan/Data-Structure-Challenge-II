// find the number that only appear in one time

function findNumber(arr) {
  let newArray = new Map();

  for (i = 0; i < arr.length; i++) {
    newArray.has(arr[i]) ? newArray.set(arr[i], 1) : newArray.set(arr[i], 0);
  }

  let result;
  newArray.forEach((value, key) => {
    if (value == 0) {
      result = key;
    }
  });
  return result;
}

console.log(findNumber([2, 2, 1]));

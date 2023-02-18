function revThree(arr) {
  //1,2,3,4,5,6,7 => 3,2,1,6,5,4,7
  for (let i = 0; i < arr.length - 2; i += 3) {
    [arr[i], arr[i + 2]] = [arr[i + 2], arr[i]];
  }
  console.log(arr);
}

revThree([1, 2, 3, 4, 5, 6, 7]);

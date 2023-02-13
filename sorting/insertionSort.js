function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }

  return arr;
}



// second time

function insertionsortII(arr)
{
  for(i=1; i<arr.length;i++)
  {
    let value = arr[i]
    for(j=i-1;j>=0 && arr[j]>value;j--)
    {
      arr[j+1]=arr[j]
    }
    arr[j+1]=value
  }
  return arr
}

console.log(insertionsortII([5,2,9,1,5,3,0,7]));
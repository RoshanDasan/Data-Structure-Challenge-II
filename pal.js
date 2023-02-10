let arr = 1212



function palindrom(str)
{
  let arr = str.toString()
  console.log(arr);
    for(let i=0,j=arr.length-1;i<(arr.length)/2;i++,j--)
    {
        if(arr[i]!=arr[j])
        {
            return false
        }
    }
    return true
}


console.log(palindrom(arr));




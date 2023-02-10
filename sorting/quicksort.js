
function Pivot(arr, start, end)
{
    let pivot = arr[arr.length/2]
    let startIndex = start

    for (let i = start+1; i <= end; i++) {
        if(pivot>arr[i])
        {       
            startIndex++
            swap(arr, startIndex, i)
        }
    }
    swap(arr, start, startIndex)

    return startIndex
}

swap = (arr, start, end) =>
{
    [arr[start],arr[end]]=[arr[end],arr[start]]
}

function quickSort(arr, start=0, end=arr.length-1)
{
    if(start<end)
    {
        let pivotIndex = Pivot(arr, start, end)

        //left
        quickSort(arr, start, pivotIndex-1)

        //right
        quickSort(arr, pivotIndex+1, end)
    }
    
    return arr
}




let arr=[5,4,3,2,1,-2,10,1000,4,-77,0,3]

quickSort(arr)
console.log(arr);
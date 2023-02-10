

function insertion(arr)
{
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i]
        for (var j = i-1; j >= 0 && arr[j]> value; j--) {
           
            arr[j+1] = arr[j]
        }
        arr[j+1]=value
    }

    return arr
}


console.log(insertion([3,2,6,4,8,1]));
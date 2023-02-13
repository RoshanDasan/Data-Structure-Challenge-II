// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function findMissingNumber(arr)
{
    // used set attribute to creat a new array
    let array = new Set(arr)
    let number = 0
    //itterate through the array and find the missing number
    while(array.has(number))
    {
        number += 1
    }
    return number
}



console.log(findMissingNumber([0,1,2,3,4,6,7,8]));
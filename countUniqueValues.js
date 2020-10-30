// write a function that accepts a sorted array and returns the number of unique values in that array
// countUniqueValues([0,1,1,1,2])  //=>3
// countUniqueValues([0,1,1,2,2,2,2,3,4,5,6,6,6,6,6])  //=>7
// countUniqueValues([])  //=>0
// countUniqueValues([-1, 0, 1])  //=>3

function countUniqueValues(array){
    if (array.length === 0)
        return 0
    let i = 0
    let j = 1
    while (j < array.length){
        if (array[i] === array[j])
            j++
        else{
            i++
            array[i] = array[j]
            j++
        }
    }
    return i + 1
}


// shorter and better solution:

function countUniqueValues(array){
    if (array.length === 0)
        return 0
    let i = 0
    for (let j = 1; j < array.length; j++){
        if (array[i] !== array[j]){
            i++
            array[i] = array[j]
        }
    }
    return i + 1    //i is the index of the last number that is replaced
}

// This has a performance of O(n) because we are only looping through the array once.


// write a function 'same' which takes in two arrays and returns true 
// if every value of the first array has a corresponding value squared in the second array, 
// with the same frequency.

function same(a,b){
    if (a.length !== b.length) // edge case
        return false
    let objA = {}
    let objB = {}
    for (let value of a){
        objA[value] = (objA[value] || 0) + 1
    }
    for (let val of b){
        objB[val] = (objB[val] || 0) + 1
    }
    for (let key in objA){
        if (!(key ** 2) in objB)
            return false
        if (objB[key**2] !== objA[key])
            return false
    }
    return true
}

same([1,2,3], [4,1,9]) //true
same([2,3,2], [9,4,4]) //true
same([2,3,2], [9,4]) //false => frequency matters
same([1,2,5], [4,25,9]) //false
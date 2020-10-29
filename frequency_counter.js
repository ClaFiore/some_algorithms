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
        
    }
}
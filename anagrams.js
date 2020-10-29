// given two strings, write a function to determine if
// the second string is an anagram of the first
// an anagram is formed by re-arranging the given letters
// cinema is anagram of iceman
// anagram('aaz', 'zza') => false
// anagram('qwerty', 'qeywrt') => true

//assumptions: all lowercase letters


// first attempt:

function isAnagram(a, b){
    if (a.length !== b.length)
        return false
    let objA = {}
    let objB = {}
    for (let letter of a){
        objA[letter] = (objA[letter] || 0) + 1
    }
    for (let letter of b){
        objB[letter] = (objB[letter] || 0) + 1
    }
    for (let key in objA){
        if (!(key in objB))
            return false
        if (objB[key] !== objA[key])
            return false
    }
    return true
}


// shorter and better alternative:

function isAnagram(a, b){
    if (a.length !== b.length)
        return false
    let obj = {}
    for (let i =0; i < a.length; i ++){
        obj[a[i]] ? obj[a[i]]++ : obj[a[i]] = 1         // let letter = a[i] for better clarity
    }
    for (let i = 0; i < b.length; i++){
        if (!obj[b[i]]) // this includes case where obj[b[i]] === 0, because 0 it's falsy
        return false
        if (obj[b[i]])
            obj[b[i]]--
    }
    return true
}
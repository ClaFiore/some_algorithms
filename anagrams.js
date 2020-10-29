// given two strings, write a function to determine if
// the second string is an anagram of the first
// an anagram is formed by re-arranging the given letters
// cinema is anagram of iceman
// anagram('aaz', 'zza') => false
// anagram('qwerty', 'qeywrt') => true

//assumptions: all lowercase letters

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
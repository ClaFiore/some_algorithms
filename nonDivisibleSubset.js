// Complete the 'nonDivisibleSubset' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER k
//  *  2. INTEGER_ARRAY s
//  subset can be not in order
// EXAMPLE: 
// s = [19,10,12,10, 24, 25,22]
// k = 4
// subsets possible: [10,12,25] or [19,22,24]
// in both case max length of subarray is 3
// function should return 3

s = [1, 7, 2, 4]
k = 3

function nonDivisibleSubset(k, s) {
    let frequency = []
    for (let i = 1; i < s.length; i++){         //fill frequency array of zeros
        frequency = [...frequency, 0]           //frequency.length === k
    }
    for (let i = 0; i < s.length; i++){
        frequency[s[i]%k] += 1
    }
    let result = Math.min(frequency[0], 1)
    if (k%2===0){
        frequency[k/2] = Math.min(frequency[k/2], 1)
    }
    
    for (let i = 1; i<= k/2; i++){
        if (i !== k - i)           // Avoid over-counting when k is even
            result += Math.max(frequency[i], frequency[k-i]) 
    }
    return result
}
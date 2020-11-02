// Complete the 'nonDivisibleSubset' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER k
//  *  2. INTEGER_ARRAY s
//  subset can be not in order
s = [19,10,12,10, 24, 25,22]
k = 4
subsets possible: [10,12,25] or []

function nonDivisibleSubset(k, s) {
    let i = 0
    let j = 1
    let sum = 0
    while (i < s.length && j < s.length){
        sum = s[i] + s[j]
        if (sum % k === 0){
        }
    }

}
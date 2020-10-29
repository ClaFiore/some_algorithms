// write a function called sumZero which accepts a SORTED array of ints
// it returns an array of the first pair of inst where the sum is 0
// else it returns undefined (nothing)

function sumZero(arr){
    let i = 0
    let j = arr.length - 1
    while (i < j){                  // it has to be < instead of <= to exclude the possibility of 0 + 0 = 0 it would return an array of 1 int
        if (arr[i] + arr[j] === 0)
        return [arr[i], arr[j]]
        else if (arr[i] < arr[j])
            j--
        else
            i++
    }
}

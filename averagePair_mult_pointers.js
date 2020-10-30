// write a function that takes in a sorted array of ints and a number
// returns true if the number is the average of the sum of two ints in the array
//averagePair([1,2,4,6,9,12],5) //true  4+6=10 =>   10/2=5
//averagePair([1,2,3,4], 2.5) //true  2+3=5 => 5/2=2.5
//averagePair([1,4], 2) //false        2 is not the average of 1 and 4

function averagePair(arr, n){
    let i = 0
    let j = arr.length - 1
    while (i < j){
        let avg = (arr[i] + arr[j]) / 2
        if (avg === n)
          return true
        else if (avg < n){
            i++
        }else{
            j--
        }
    }
    return false
  }
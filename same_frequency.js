// write a function that accepts two positive integers and 
// it returns true if they have the same frequency of digits.

function sameFrequency(a, b){
    a = String(a)
    b = String(b)
    if (a.length !== b.length) return false
    let obj = {}
    for (let i = 0; i < a.length; i++){
        a[i] in obj ? obj[a[i]]++ : obj[a[i]]=1
        console.log(obj)
    }
    for (let i = 0; i < b.length; i++){
        if (!obj[b[i]] || obj[b[i]] <= 0){
            return false
        }else{
            obj[b[i]]--
        }
    }
    return true
  }
  
  sameFrequency(112, 211) //true
  sameFrequency(112, 221) //false
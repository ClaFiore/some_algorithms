// write a function that accepts any number of arguments and checks if there are duplicates
// areThereDuplicates(1,2,3)     //false
// areThereDuplicates(1,2,1)     //true
// areThereDuplicates('a', 'b', 'c', 'b')     //true


function areThereDuplicates() {
    if (!arguments) return false
     let obj = {}
     for (let i=0; i<arguments.length; i++){
         obj[arguments[i]] ? obj[arguments[i]]++ : obj[arguments[i]] = 1
         if (obj[arguments[i]] >= 2){
             return true
         }
     }
     return false
   }

   // second solution

   function areThereDuplicates() {
    if (!arguments) return false
     let obj = {}
     for (let arg of arguments){
         obj[arg] ? obj[arg]++ : obj[arg] = 1
         if (obj[arg] >= 2){
             return true
         }
     }
     return false
   }
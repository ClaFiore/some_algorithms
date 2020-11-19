// How many times can you find the short string 'match' in the long string?

function stringSearch(string, match){
    let count = 0
  
    for (let i = 0; i < string.length; i++){
  
      for (let j = 0; j < match.length; j++){
        if (string[i+j] !== match[j]) break
        if (j === match.length - 1) count ++
      }
      
    }
  return count
  }
  
  
  stringSearch('lourie loled', 'lol') //returns 1
  stringSearch('lolurie loled', 'lol') //returns 2
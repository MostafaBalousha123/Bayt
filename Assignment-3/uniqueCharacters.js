const isUniqueCharacters = ( word ) =>{
  const object = { }
  for (let i = 0; i < word.length; i++) {
    if(object[word[i]]){
      return false
    }else{
      object[word[i]]= true
    }    
  }
  return true
} 

console.log(isUniqueCharacters('mostafa'))
console.log(isUniqueCharacters('most '))
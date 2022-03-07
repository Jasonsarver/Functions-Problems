/*
step.1 write js function that accepts string as parameter
step.2 create variable called longest word and set it to an empty
string so theres something for the first loop to compare to
step.3 use string split method to turn each word into an array,
name it arrayOfWords
step.4 use a for loop to loop through the array to find 
longest word
/* 


*/
const str = "Hi I am Jason from Seattle"
function findLongestWord(str){
  let longestWord = "" 
  const arrayOfWords = str.split(" ")
  for(let i = 0; i < arrayOfWords.length; i++){
    if (arrayOfWords[i].length > longestWord.length){
      longestWord = arrayOfWords[i]
    }
      
  }
    
  return longestWord;
}

console.log(findLongestWord(str))
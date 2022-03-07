/* 
step.1 create function that accepts str and a specified letter, 
it will count # of times specified letter shows up in string
step.2 set initial letter count to 0
step.3 create for loop that loops through string and increases
'amountOfTimes' variable by 1 with every new occurence
step.4 use charAt() method to return specified character from index
*/

function letterCounter (str,letter){
    let amountOfTimes = 0
    for (let i = 0; i < str.length; i++){
      if(str.charAt(i) == letter){
        amountOfTimes += 1;
      }
    }
    return amountOfTimes
   
  }
  console.log(letterCounter('Hi i love seattle','a'))
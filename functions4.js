/*
step.1 use for loop to loop thru numbers 1-100
step.2 use if/else if statements to findout iof numbers are
divisible by 3,5 and 15 and print fizz, buzz, and fizzbuzz
accordingly
step.3 add a final else statement for all numbers that arent
divisible by 3,5 or 15 and will just print their index
*/
for(i = 1; i < 101; i++){
    if( i % 15 === 0){
      console.log("FIZZBUZZ")
    }
    else if (i % 3 === 0){
      console.log("FIZZ")
    }
    else if (i % 5 === 0){
      console.log("BUZZ")
    }
    else(console.log(i))
  }

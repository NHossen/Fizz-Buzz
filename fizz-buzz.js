// Fizz -buzz Solutions by Array...

/*
1 to 100

*/ 



function fizzBuzz(count) {
    for(let i=1; i<=count; i++){
        if (i%15==0){
            console.log("FizzBuzz");
        } 
        else if(i%3==0){
          console.log("Fizz");
        }  
       
        else if (i%5==0){
          console.log("Buzz");
        }
         
        else console.log(i);
    }
}
fizzBuzz(55);


// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }




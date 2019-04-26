let a, b, c, d, e, f, g, h, result;

// -For the following questions you will need to use mathmatical operators-

// Question 1
// Make the result be the sum of a and b

a = 10;

b = 20;

result = a + b; // ?

// Question 2
// Make the result be 20

a = 10;

b = 2; // ?

result = a * b;

// Question 3
// Make the result be 5

a = 10;

b = 2; // ?

result = a / b;

// Question 4
// Make the result be the average of a, b, c, d

a = 10;

b = 0;

c = 10;

d = 0;

result = (a + b + c + d) / 4; // ?

// Question 5
// Make the result be the remainder from when a and b are divided

a = 10;

b = 3;

result = 10 % 3; // ?

// Question 6
// Make the result a boolean of whether or not a is an even number

a = 10;

result = a % 2 !== 0; // ?

// - For the following questions, you will need to use for loops -
// https://www.w3schools.com/js/js_loop_for.asp

// Question 7
// Make the console.log run 7 times

var step;
for (step = 0; step < 7;  step += 1) {
  console.log("I am logging 7 times");
}

// Question 8
// Make the result equal to 70.
// You cannot write any numbers.
result = 0;
a = 10;
for (result = 0; result < 70; result += a) {}

// ?

// Question 9
// Make the result the sum of all numbers between 0 and 10
// You cannot write any numbers.
var startingPlace = 0;
var endingPlace = 10;
var currentNumber;

result = 0;

for (
  currentNumber = startingPlace;
  currentNumber <= endingPlace;
  currentNumber += 1
) {
  result += currentNumber;
}

// Question 10
// Make the result the sum of all even numbers between 0 and 10
// You cannot write any numbers.
var startingPlace = 0;
var endingPlace = 10;
var zero = 0;

result = 0;
for( 
     zero = startingPlace;
     zero<=endingPlace;
      zero+=1) {
        if (zero%2!==0){
            result +=zero
        }  

}

// Question 11
// Make the result the sum of all odd numbers between 0 and 10
// You cannot write any numbers.
var startingPlace = 0;
var endingPlace = 10;
var zero=0;
for(zero = startingPlace;
     zero <= endingPlace;
      zero+=1 ) {
         if (zero%2 !==0) {
            result +=zero    
         }
}
result = 0;

// ?
// ?
// ?

// Question 12
// Make the result the sum of all numbers perfectly divisible by 3
// You cannot write any numbers.

var three = 3;
var i;


result = 0;
for(i=0; i < 15; 
    i+=1) {
        if (i%three===0) {
            result+=i
}
}
// ?
// ?
// ?

// Question 13
// Make the result 7;
// You cannot reference "result" anywhere that it is not already referenced.

result = 0;
var i = 0
for(i=0; i< 7; i+=1){
    
    result += 1;  
}

// ?

// Question 14
// Make the result 10;
// You cannot reference "result" anywhere that it is not already referenced.

result = 0;
var i = 0
for(i=0; i<10; i+=1){
    result += 1; 

}

// ?

// Question 15
// Make the result 10;
// You cannot reference "result" anywhere that it is not already referenced.

result = 0;
var i= 0

for(i=0; i<5; i+=2) {
    //if(i/2==5){
        result += 2; 
    //}       
}


// ?

// - For the following questions, you will need to use functions -
// https://www.w3schools.com/js/js_functions.asp

// Question 16
// Make the result 20.
// You cannot write any numbers

var add = function(a, b) {
  return a+b
};

// result = add(10, 10);

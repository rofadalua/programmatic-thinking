// Challenge 27
// Finish the isEven function
// threeIsEven should === false
// twoIsEven should === true

var isEven = function(number){
    if(number % 2 == 0){
        return true
    } else {
       return false
    }
}

var isThreeEven = isEven(3)
var isTwoEven = isEven(2)

var isOdd = function(number) {
    if(number % 2 !==0){
        return false
     } else {
       return true
        }
    }
  var isFourOdd = isOdd(4)  
  var isThreeOdd = isOdd(3)
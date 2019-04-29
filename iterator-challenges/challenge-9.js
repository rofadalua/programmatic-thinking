// Challenge 9
// Write a function which takes in an array of numbers
// and returns a new array with every number from the first array divided by 2
var array = [1,2,3,4,5,6,7]
var divide_number = function(array){
    newArray = []
     array.forEach(function(array){
         return newArray.push(array/2)
    })
    return newArray
}
divide_number([1,2,3,5,6,7])
// Challenge 10
// Write a function which takes in an array of numbers
// and returns a new array with every number from the first array + 2
// do not use forEach (use map instead!)
array = [1,2,6,7,8]
var add_array = function(array){
    newArray = []
array.map(function(array){
   
    return newArray.push(array+=2)
})
 return newArray
}
add_array([1,2,6,7,8])

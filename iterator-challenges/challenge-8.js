// Challenge 8
// Write a function which takes in an array of numbers
// and returns a new array with every number from the first array + 2
var array = [1,2,3,4,5]

var add = function(array){
    var newArray = [] 
    array.forEach(function(array){ 
        return  newArray.push(array+=2)  
    })
    return newArray
}

add([1,2,3,4,5])











    // var array = [];
    // for(i=0; i< myArray.length; i++){
    //     array.push(myArray+1);
    //     return array;
    // };
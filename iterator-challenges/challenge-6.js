// Challenge 6
// Complete this function to return the average of an array of numbers

var average = function(numbers){
    add = 0
    numbers.forEach(function(number){
        add+=number
    })

    return add/numbers.length
}

var fifteen = average([10, 20])
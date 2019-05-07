// Question 43
// Set the result = 'victory'
// Edit ball however you would like
// Do not write 'victory'
// Do not write ball
// Do not edit the line with -X-

var ball = {
    // ?
    inside: 'victory'
    // ?
}

var firstPin = function(ball){
    return ball.left
}

var secondPin = function(ball){
    return ball.right
}

var thirdPin = function(ball){
    return ball.left
}

// Use console.log to check each variable!
var firstPlace = firstPin(ball) // -X-
var secondPlace = secondPin(firstPlace) // -X-
var thirdPlace = thirdPin(secondPlace) // -X-

var result = thirdPlace.inside
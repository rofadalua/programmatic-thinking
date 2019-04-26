// Challenge 30
// Write a function that returns true if
// the argument passed to it is between than 5 and 20
// Do not write an "if" statement

var betweenFiveAndTwenty = function(number) {
  return number > 5 && number < 20;
};

var isSevenBetweenFiveAndTwenty = betweenFiveAndTwenty(7);
// ///////


var betweenFiveAndTwenty = function(number) {
  return number < 5 && number < 20;
};
var isSevenBetweenFiveAndTwenty = betweenFiveAndTwenty(7)

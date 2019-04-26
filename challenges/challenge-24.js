// Challenge 24
// Find the average revenue for each year
// You can only use "+" once
// you can only use "/" once

var revenue_year_1_a = 100;
var revenue_year_1_b = 200;

var revenue_year_2_a = 200;
var revenue_year_2_b = 300;

var add = function(number_1, number_2) {
  return number_1 + number_2;
};

var divide_by_2 = function(number_1) {
  return number_1 / 2;
};

var average = function(revenue_a, revenue_b) {
  var total_revenue = add(revenue_a, revenue_b);
  return divide_by_2(total_revenue);
};

var average_revenue_year_1 = average(revenue_year_1_a, revenue_year_1_b);
var average_revenue_year_2 = average(revenue_year_2_a, revenue_year_2_b);

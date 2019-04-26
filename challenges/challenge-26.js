// Challenge 25
// Find the profit (the revenue - the expenses) for each year
// Do can only use "-" once
// Do not create a function called subtract
const reduce_numbers = function(number_1, number_2){
    return number_1 - number_2
}


var revenue_year_1 = 100
var expenses_year_1 = 200

var revenue_year_2 = 200
var expenses_year_2 = 300

var revenue_year_3 = 300
var expenses_year_3 = 400

var revenue_year_4 = 400
var expenses_year_4 = 500


var total_profit_1 = reduce_numbers(revenue_year_1,revenue_year_2)
var total_profit_2 = reduce_numbers(revenue_year_3,revenue_year_4)
var total_profit_3 = reduce_numbers(expenses_year_1,expenses_year_2)
var total_profit_4 = reduce_numbers(expenses_year_3,expenses_year_4)


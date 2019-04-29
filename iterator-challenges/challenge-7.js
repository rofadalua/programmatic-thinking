// Challenge 7
// Complete this function to return the profit, given an array of revenue and expenses

var add = function(numbers) {
  total_numbers = 0;
  numbers.forEach(function(number) {
    total_numbers += number;
  });
  return total_numbers;
};

var profit = function(revenue, expenses) {
  total_expenses = add(expenses);
  total_revenue = add(revenue);
  return total_revenue - total_expenses;
};

var result = profit([10, 10, 10], [5, 5, 5]);

// Challenge 32
// Set result = 100
// Do not write 100
// Do not write "+"

var totalProfit = function(profits){
    var total = 0
    profits.forEach( profit => {
        total +=  profit
    })
    return total
}

var result = undefined // ? 
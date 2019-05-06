// Challenge 33
// Set result = 100
// Do not write 100
// Do not write "+"

var totalProfit = function(years){
    var total = 0
    years.forEach( year => {
        total +=  year.profit
    })
    return total
}

var result = undefined // ? 
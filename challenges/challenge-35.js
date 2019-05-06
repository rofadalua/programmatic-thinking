// Challenge 32
// Set result = 100
// Do not write 100
// Do not write any operators

var totalProfitPerDay = function(years){
    var total = 0
    years.forEach( year => {
        total += ( year.profit / year.days)
    })
    return total
}

var result = undefined // ? 
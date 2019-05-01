// Challenge 14
// Write a function that returns the the total number of students.
// Do not write 54.
// You can only use "+" once

var flation = {
    houston:{ 
        cohorts: [ 
            {
                numberOfStudents: 27,
                name: 'Houston[0]'
            }, 
            {
                numberOfStudents: 12,
                name: 'Bash the Hash'
            },
            {
                numberOfStudents: 15,
                name: 'Houston Codeo'
            } 
        ]
    }
}
// var add = function(number_1, number_2){
//    return number_1 + number_2
// }
totalNumber= 0
flation.houston.cohorts.forEach(function(cohort){
      console.log(cohort.numberOfStudents)

 totalNumber +=cohort.numberOfStudents
   
    // totalNumberOfStudents = []
    // totalNumberOfStudents+= numberOfStudents[0][1][2]
})
// var myFirst = flation.houston.cohorts[0].numberOfStudents
// var mySecond = flation.houston.cohorts[1].numberOfStudents
// var myThird = flation.houston.cohorts[2].numberOfStudents
// totalOfStudents = add(myFirst,mySecond)
// totalNumber = add(totalOfStudents,myThird)

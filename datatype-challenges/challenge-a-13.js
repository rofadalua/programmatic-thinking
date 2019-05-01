// Challenge 13
// Write a function that returns the the total number of students.
// Do not write 42.

var flation = {
    houston:{ 
        cohorts: [ 
            {
                numberOfStudents: 27,
                name: 'Houston[0]'
            }, 
            {
                numberOfStudents: 15,
                name: 'Houston Codeo'
            } 
        ]
    }
}

var myThing = function(){
    var firstNumberOfStudents = flation.houston.cohorts[0].numberOfStudents
    var secondNumberOfStudents = flation.houston.cohorts[1].numberOfStudents
    return  firstNumberOfStudents + secondNumberOfStudents
}
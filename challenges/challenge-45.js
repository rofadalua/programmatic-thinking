// Question 43
// Set the result = 'victory'
// Edit ball however you would like
// Do not write 'victory', 'north', 'south', 'east', 'west', or 'door'
// Do not edit the maze

var maze = {
    north: {
        east:{
            door: 'defeat'
        },
        west: {
            door: 'victory'
        }
    }, 
    south:{
        east:{
            door: 'defeat'
        },
        west: {
            door: 'defeat'
        }
    },
}

var goNorth = function(maze){
    return maze.north
}

var goSouth = function(maze){
    return maze.south
}

var goWest = function(maze){
    return maze.west
}

var goEast = function(maze){
    return maze.east
}

var openDoor = function(maze){
    return maze.door
}


var result = undefined // ?
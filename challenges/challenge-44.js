// Question 43
// Set the result = 'victory'
// Edit ball however you would like
// Do not write 'victory', 'north', 'south', 'east', 'west', or 'door'
// Do not edit the maze

var maze = {
    north: {
        door: 'victory'
    }, 
    south:{
        door: 'defeat'
    },
}

var goNorth = function(maze){
    return maze.north
}

var goSouth = function(maze){
    return maze.south
}

var openDoor = function(maze){
    return maze.door
}


var result = undefined // ?
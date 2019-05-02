import React from 'react'

export default class Challenge extends React.Component {

    state = {
        newTask: '',
        tasks: [ 
            "Change state",
            "Increment state",
            "Toggle state",
            "Rendering from arrays",
            "Adding to arrays",
            "Removing from arrays",
            "Updating an element in an array"
        ]
    }

    render(){
        // Use setState to change the counter to one more than it's previous value
        // when the input changes, save it's value in state
        // when the button is clicked, add the newTask to the array of tasks
        // Hint: when setting state, set the { tasks: [ ...this.state.tasks, this.state.newTask] } 
        return (
            <div>
                <ul>
                    {/* Render a list of tasks here */}
                </ul>
                <input type="text" value={this.state.newTask} ></input>
                <input type="submit" />
            </div>
        )
    }

}
import React from 'react'

export default class Challenge extends React.Component {

    state = {
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
        return (
            <div>
                <ul>
                    {/* Render a list of tasks here */}
                </ul>
                <input type="text" ></input>
                <input type="submit" />
            </div>
        )
    }

}
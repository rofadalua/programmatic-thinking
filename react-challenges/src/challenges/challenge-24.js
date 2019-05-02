import React from 'react'

export default class Challenge extends React.Component {

    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState({ counter: undefined })
    }

    render(){
        // Use setState to change the counter to one more than it's previous value
        return (
            <h1 onClick={ /* Pass a function update the state of the counter  */ } >
                The Count: { undefined /* Render the counter here */ }
            </h1>
        )
    }

}
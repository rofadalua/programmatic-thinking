import React from 'react'

export default class Challenge extends React.Component {

    state = {
        counter: 0
    }

    render(){
        // Use setState to change the counter to one more than it's previous value
        // when the "Toggle" button is clicked, toggle the counter between 1 and 0
        return (
            <div>
                <h1 onClick={ this.handleClick }>
                    The Count: { this.state.counter }
                </h1>
                <button>Toggle</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState({ counter: undefined })
    }

}
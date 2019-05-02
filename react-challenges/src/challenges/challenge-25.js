import React from 'react'

export default class Challenge extends React.Component {

    state = {
        counter: 0
    }

    render(){
        // Use setState to change the counter to one more than it's previous value
        // when the button is clicked
        return (
            <div>
                <h1 onClick={ this.handleClick }>
                    The Count: { this.state.counter }
                </h1>
                <button>Click Me!</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState({ counter: undefined })
    }

}
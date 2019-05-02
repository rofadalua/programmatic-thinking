import React from 'react'

export default class Challenge extends React.Component {

    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState({ counter: ++this.state.counter })
    }

    render(){
        // Use setState to change the counter to one more than it's previous value
        return (
            <h1 onClick={this.handleClick} >{this.state.counter}
            </h1>
        )
    }

}
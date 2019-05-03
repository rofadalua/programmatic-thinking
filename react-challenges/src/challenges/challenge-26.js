import React from 'react'

export default class Challenge extends React.Component {

    state = {
        counter: 0
    }

    render(){
        // Use setState to change the counter to one more than it's previous value
        // when the "-" button is clicked, reduce the counter by one
        // when the "+" button is clicked, increase the counter by one
        return (
            <div>
                <h1> { this.state.counter }
                </h1>
                <button onClick={this.handleClick2}>Decrease</button>
                <button onClick={this.handleClick}>increase</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState({ counter: ++this.state.counter})
    }
    handleClick2 = () => {
        this.setState({counter: --this.state.counter})
    }
}

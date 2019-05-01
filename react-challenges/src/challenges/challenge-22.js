import React from 'react'

export default class Challenge extends React.Component {

    state = {
        content: 'Hello World'
    }

    render(){
        // This code adds 1 to the header everytime the header is clicked
        // Update it to add an exclamation point instead
        return (
            <h1 onClick={() => {
                this.setState({ content: `${this.state.content}1` })
            }} >{ this.state.content }</h1>
        )
    }

}
import React from 'react'

export default class Challenge extends React.Component {

    state = {
        content: 'Hello World'
    }

    render(){
        // Change the content to 'Hello World!!!' onClick
        return (
            <h1 onClick={() => {
                this.setState({ content: undefined })
            }} >{ this.state.content }</h1>
        )
    }

}
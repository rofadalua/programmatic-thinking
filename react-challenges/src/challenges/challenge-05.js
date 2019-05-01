import React from 'react'

export default class Challenge extends React.Component {

    state = {
        content: "Hello World"
    }

    render(){
        return (
            <h1>{ this.state.content}</h1>
        )
    }

}
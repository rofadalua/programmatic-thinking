import React from 'react'

export default class Challenge extends React.Component {

    constructor(){
        super()
        this.state = {
            content: "Hello World"
        }
    }

    render(){
        return (
            <h1>{ /* Put "Hello World" here. Do not write Hello World.*/ }</h1>
        )
    }

}
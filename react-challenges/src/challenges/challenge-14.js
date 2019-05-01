import React from 'react'

export default class Challenge extends React.Component {


    render(){
        return (
            // Render 3 headers:
            //  one that reads "Hello World",
            //  one that reads "Goodbye World"
            //  one that reads  "Code re-use is fun"
            // Do not write "h1"
            undefined
        )
    }

}

class Header extends React.Component {
    render(){
        return <h1>{this.props.content}</h1> 
    }
}
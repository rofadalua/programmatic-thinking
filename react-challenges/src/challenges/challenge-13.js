import React from 'react'

export default class Challenge extends React.Component {

    state = {
        content: 'Hello World'
    }

    render(){
         // Put "Hello World" in an h1 tag below.
        // Do not write Hello World or h1 
        return <Header content= {this.state.content}/>
    }

}

class Header extends React.Component {
    render(){
        return <h1>{this.props.content}</h1> 
    }
}
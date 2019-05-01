import React from 'react'

export default class Challenge extends React.Component {

    content = "Hello World"

    render(){
        return <Header />
    }

}

class Header extends React.Component {
    render(){
        // Put "Hello World" in this h1 tag.
        // Do not write Hello World 
        return <h1>{undefined}</h1> 
    }
}
import React from 'react'

export default class Challenge extends React.Component {


    render(){
        return (
            
            <ul>

            <List great={'Hello World'}/>
            <List great={'Goodbye World'}/>
            <List great={'Code re-use is fun'}/>

                {/* 
                // Render 3 list items:
                //  one that reads "Hello World",
                //  one that reads "Goodbye World"
                //  one that reads  "Code re-use is fun"
                // Only write "li" once 
                */}
            </ul>
        )
    }

}
class List extends React.Component{
    render(){
        return <li>{this.props.great}</li>
    }
    
}
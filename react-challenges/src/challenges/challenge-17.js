import React from 'react'

export default class Challenge extends React.Component {


    render(){
        let listItems = [
            "Hello World", "Goodbye World", "Code re-use is fun"
        ]
        return (
            <ul>
             {listItems.map(item => <Items message={item}/>)}
           

                {/* 
                // Render 3 list items:
                //  one that reads "Hello World",
                //  one that reads "Goodbye World"
                //  one that reads  "Code re-use is fun"
                // Only write "li" once 
                // Do not write "Hello World", "Goodbye World", or "Code re-use is fun"
                */}
            </ul>
        )
    }

}
class Items extends React.Component{
    render(){
        return <li>{this.props.message}</li>
    }
}
import React from "react";

export default class Challenge extends React.Component {
  
  state = {
    content: "Hello World"
  };

//   setState = () => {

//   }
// handleClick = () => {
//     this.setState({ content: "Hello World!!!" });
//   };

  render() {
      return(
    <h1 onClick= {()=> {
     this.setState({content: 'Hello World!!!!' })
      }} >{this.state.content} </h1>
     ) 
   }

  }


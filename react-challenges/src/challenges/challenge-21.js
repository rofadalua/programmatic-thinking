import React from "react";

export default class Challenge extends React.Component {
  state = {
    content: "Hello World"
  };

  render() {
    return <h1 onClick={this.handleClick}>{this.state.content}</h1>;
  }

  handleClick = () => {
    this.setState({ content: "Hello World!!!" });
  };
}


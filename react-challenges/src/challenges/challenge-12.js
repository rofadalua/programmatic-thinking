import React from "react";

export default class Challenge extends React.Component {
  state = {
    content: "Hello World"
  };

  render() {
    return <Header content={this.state.content} />;
  }
}

class Header extends React.Component {
  render() {
    // Put "Hello World" in this h1 tag.
    // Do not write Hello World
    return <h1>{this.props.content}</h1>;
  }
}

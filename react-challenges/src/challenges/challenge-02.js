import React from "react";

export default class Challenge extends React.Component {
  constructor() {
    super();
    this.content = "Hello World";
  }

  render() {
    return <h1>{this.content}</h1>;
  }
}

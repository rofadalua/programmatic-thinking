import React from "react";

export default class Challenge extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
      </div>
      // Put three headers here with the text "Hello World".
      // Do not write "Hello World" or "h1";
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

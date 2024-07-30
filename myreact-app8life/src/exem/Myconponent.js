import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    number: 0,
  };

  //1
  constructor(props) {
    super(props);
    console.log("Constructor Method 호출");
  }

  //2
  static getDerivedStateFromProps(nexProps, prevState) {
    console.log("getDerivedStateFromProps 호출");
    return null;
  }

  //4
  componentDidMount() {
    console.log("componentDidMount 호출");
  }

  //3
  render() {
    console.log("render 호출");

    return (
      <div>
        <h1>Hello World!! My Name is {this.props.name}</h1>
      </div>
    );
  }
}

export default MyComponent;

import React, { Component } from "react";
//업데이트 단계
// 1. static getDerivedStateFromProps()
// 2. shouldComponentUpdate()
// 3. render()
// 4. getSnapshotBeforeUpdate()
// 5. componentDidUpdate()
class MyComponent2 extends Component {
  state = {
    name: "",
  };

  constructor(props) {
    super(props);

    console.log("Constructor Method 호출");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps 호출");
  }

  shouldComponentUpdate(nextprops, nextState) {
    console.log("sholudComponetUpdate 호출");

    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate 호출");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate 호출");

    return null;
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    console.log("render 호출");

    return (
      <div>
        <input onChange={this.handleOnChange}></input>

        <h1>My Name is {this.state.name}</h1>
      </div>
    );
  }
}

export default MyComponent2;

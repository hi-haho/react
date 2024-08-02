import "./App.css";
import React, { Component } from "react";
import AddNumberSuper from "./mydir/AddNumberSuper";
import ShowNumberSuper from "./mydir/ShowNumberSuper";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>Main</h1>
        {/* App 소유 state변수 number + size (AddNumberSuper가 전달한 값) 
        <AddNumberSuper
          onClick={function (size) {
            this.setState({ number: this.state.number + size });
          }.bind(this)}
        ></AddNumberSuper>
        number : {this.state.number}
        <ShowNumberSuper number={this.state.number}></ShowNumberSuper>*/}
        <AddNumberSuper></AddNumberSuper>
        <ShowNumberSuper></ShowNumberSuper>
      </div>
    );
  }
}

export default App;

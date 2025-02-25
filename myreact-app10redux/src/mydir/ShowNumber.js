import React, { Component } from "react";
import store from "../store";

export default class ShowNumber extends Component {
  state = { number: store.getState().number };

  constructor(props) {
    super(props);
    store.subscribe(
      function () {
        this.setState({ number: store.getState().number });
      }.bind(this)
    );
  }
  render() {
    return (
      <div>
        <h1>Show Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    );
  }
}

// export default class ShowNumber extends Component {
//     render() {
//       return (
//         <div>
//           <h1>Show Number</h1>
//           <input type="text" value={this.props.number} readOnly></input>
//         </div>
//       );
//     }
//   }

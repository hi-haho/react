import React, { Component } from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component {
  render() {
    return (
      <div id="super">
        <h1>Show NumberSuper</h1>
        {/* App이 넘겨준 props : {this.props.number} 
        <ShowNumber number={this.props.number}></ShowNumber>*/}
        <ShowNumber></ShowNumber>
      </div>
    );
  }
}

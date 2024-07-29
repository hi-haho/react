import React, { Component } from "react";

class myName extends Component {
  static defaultProps = { name: "기본 이름" };
  //props에 기본값 부여

  render() {
    return (
      <div>
        <b>안녕! 나는 {this.props.name}이야</b>
      </div>
    );
  }
}
myName.defaultProps = {
  //props에 기본값 부여
  name: "기본 이름",
};

/*
const myName = ({ name }) => {
  return (
    <div>
      <b>{name}</b> 님 안녕하세요.
    </div>
  );
};
*/
/*
function myName(propsha) {
  return (
    <div>
      <b>{propsha.name}</b> 님 안녕하세요.
    </div>
  );
}
  */
export default myName;

//import React, {Component} from "react";
import React from "react";
class Clock1 extends React.Component {
  //컴포넌트 생성자 메서드, 컴포넌트가 생성되면 가장 먼저 실행되는 메서드
  //this.props, this.state에 접근이 가능하고 리액트 요소를 반환한다. > 요즘 잘 사용하지 않음
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <h1>안녕!</h1>
        <h2>지금은 {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Clock1;

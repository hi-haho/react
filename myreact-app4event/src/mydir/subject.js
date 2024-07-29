import React, { Component } from "react";

class Subject extends Component {
  render() {
    const clickHandler = () => {
      console.log("두번째 버튼. 클릭 성공!");
    };
    const keyUpHandler = (e) => {
      //텍스트 박스의 keyUp 이벤트 핸들러
      console.log("텍스트 키없 이벤트");
      console.log("입력한 값 : " + e.target.value);
    };

    return (
      <header>
        <h1>머리글 : {this.props.title}</h1>
        <i>{this.props.subtitle}</i> <br></br>
        추가해볼게! {this.props.tata}
        <br></br>
        button이벤트 : <br></br>
        <button
          onClick={function () {
            this.props.ChangePage();
          }.bind(this)}
        >
          {this.props.subtitle}
        </button>
        <br />
        <button onClick={clickHandler}>두번째 클릭</button>
        <br />
        <input type="text" onKeyUp={keyUpHandler}></input>
      </header>
    );
  }
}

export default Subject;

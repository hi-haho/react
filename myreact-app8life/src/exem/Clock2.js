import React, { Component } from "react";

//마운트 메소드호출 순서) constructor > getDerivedStateFromProps > render > componentDidMount
class Clock2 extends Component {
  //클래스형 컴포넌트는 props를 기본 contructor를 호출해야한다.
  constructor(props) {
    //컴포넌트가 생성되면 가장 먼저 실행되는 메서드
    super(props);
    this.state = { date: new Date() }; //state를 생성자에서 지정. 프로토타입이 생성되는 것
  }

  showTime() {
    //클래스에서는 hook이 없기때문에
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    // 시스템에 의한 콜백
    // 컴포넌트의 첫번째 렌더링이 마치면 호출되는 메서드다.
    // 메서드가 호출되는 시점에는 화면에 컴포넌트가 나타난 상태
    // 컴포넌트 출력자료가 Dom에 렌더링 된 후 실행되기 때문에 타이머 따위의 작업을 하기에 적합메서드이다.

    //setInterval() : 특정 코드를 일정 시간 간격을 두고 반복 호출 가능
    this.timerId = setInterval(() => this.showTime(), 1000);
  }

  componentWillUnmount() {
    //컴포넌트가 화면에서 사라지기 직전에 호출
    //사용된 메모리 등의 작업 마무리
    //SPA를 개발할 때는 메모리 누수(leak)를 방지하는 작업이 필요하다
    clearInterval(this.timerId); //setInterval 해제
  }
  render() {
    //jxs
    return (
      <div>
        <h1>하이헬로</h1>
        <h2>지금은 {new Date().toLocaleTimeString()}</h2>
        <h2>현재 시간은 {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock2;

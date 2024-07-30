import React, { useState, useEffect } from "react";

const Clock3 = () => {
  const [date, setDate] = useState(new Date());

  //useEffect를 사용하면 내부적으로 생명주기 메서드가 처리된다
  useEffect(() => {
    //클래스의 componentDidMount()를 아래처럼 기술
    const timerId = setInterval(() => showTime(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []); //useEffect 쓸 때 배열을 사용해야한다
  //useState로 statd를 최기화
  const showTime = () => {
    //클래스에서는 hook이 없기때문에
    setDate(new Date());
  };

  return (
    <div>
      <h1>헬로</h1>
      <h2>지금은 {new Date().toLocaleTimeString()}</h2>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </div>
  );
};
export default Clock3;

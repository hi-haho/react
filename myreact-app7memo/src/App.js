import React, { useState } from "react";
import Child from "./mydir/child";

function App() {
  //App 컴포넌트(함수) 호출될 때 함수 내의 내용을 차례대로 수행(랜더링)

  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  const changeFatherAge = () => {
    //이벤트 핸들러
    setFatherAge(fatherAge + 1);
  };
  const changeChildAge = () => {
    //이벤트 핸들러
    setChildAge(childAge + 1);
  };
  console.log("아빠 나이가 변경됨 - 렌더링" + fatherAge);
  const boxstyle = { border: "2px solid", padding: "10px" };

  return (
    <div className="App" style={boxstyle}>
      <h2>😎 호호호</h2>
      <span>나이 : {fatherAge}</span>&emsp;
      <button onClick={changeFatherAge}>아빠 나이 +1</button>
      {/* <h3>😙 하하하</h3>
      <span>나이 : {childAge}</span>&emsp;
      <button onClick={changeChildAge}>아들 나이 +1</button> */}
      <Child irum={"하하하"} nai={childAge}></Child>
      <button onClick={changeChildAge}>아들 나이 +1</button>
    </div>
  );
}

export default App;

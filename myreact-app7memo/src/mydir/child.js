import React, { memo } from "react";

const boxstyle = { border: "1px solid blue", padding: "20px" };

//function child({irum,nai}){...}
const child = ({ irum, nai }) => {
  console.log("와우 자녀 나이 바뀜(랜더링)");
  return (
    <div style={boxstyle}>
      <h3>🙈 헤헤헤</h3>
      <p>나이 : 5살</p>
      <h3>🙉 {irum}</h3>
      <p>나이 : {nai}살</p>
    </div>
  );
};

//export default child;
export default memo(child); //반환 컴포넌트를 메모함수로 감싸주면 memo기능이 활성화된다.

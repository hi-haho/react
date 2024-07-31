import React, { useState } from "react";

const Count = () => {
  const [member, setMember] = useState(0);

  const increase = () => {
    setMember(member + 1);
  };
  const decrease = () => {
    setMember(member - 1);
  };

  return (
    <div>
      <br />
      <br />
      <button onClick={increase}>친구 추가</button>
      &emsp;
      <button onClick={decrease}>친구 삭제</button>
      <p>친구 수 : {member}</p>
    </div>
  );
};
export default Count;

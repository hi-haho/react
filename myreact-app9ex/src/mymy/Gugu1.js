import React, { useState } from "react";
import GugudanList from "./GugudanList";

const Gugu1 = () => {
  const [dan, setDan] = useState(1);
  const [text, setText] = useState(1);

  const dataSubmit = (e) => {
    const danNum = parseInt(e.target.value);

    if (!Number(danNum) || isNaN(Number(danNum))) {
      alert("숫자만 입력하세요");
      setDan(1);
    } else {
      setText(danNum);
    }
  };

  const danClick = (e) => {
    e.preventDefault(); //event 막아주기
    setDan(text);
  };

  return (
    <div>
      <div>
        <form>
          단 입력 : <input type="text" onChange={dataSubmit} />
          <button onClick={danClick}>확인</button>
        </form>
      </div>
      <div>
        <GugudanList dan={dan} />
      </div>
    </div>
  );
};

export default Gugu1;

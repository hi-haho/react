import React, { useState } from "react";

const boxstyle = { border: "1px solid blue", padding: "20px" };

const UnitConv = () => {
  const [m, setM] = useState(1);
  const [cm, setCm] = useState(m * 100);

  const changeM = (e) => {
    setM(e.target.value);
    setCm(m * 100);
  };

  const changeCm = (e) => {
    setM(e.target.value);
    setM(cm / 100);
  };

  return (
    <div style={boxstyle}>
      <input type="text" id="m" value={m} onInput={changeM}></input>
      m <br />
      = <br />
      <input type="text" id="cm" value={cm} onInput={changeCm}></input>
      cm
      <br />
    </div>
  );
};

export default UnitConv; // 메모
